"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { data } from "../data";
import { lora } from "../font";

function Place({ id }: { id: string }) {
  const panoRef = useRef(null);
  const { push } = useRouter();

  useEffect(() => {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove("desktop");
        document.body.classList.add("mobile");
      } else {
        document.body.classList.remove("mobile");
        document.body.classList.add("desktop");
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);

    // Detect whether we are on a touch device.
    document.body.classList.add("no-touch");
    window.addEventListener("touchstart", function () {
      document.body.classList.remove("no-touch");
      document.body.classList.add("touch");
    });

    // Viewer options.
    var viewerOpts = {
      controls: {
        mouseViewMode: data.settings.mouseViewMode,
      },
    };

    // Initialize viewer.
    const Marzipano = require("marzipano");
    var viewer = new Marzipano.Viewer(panoRef.current, viewerOpts);

    // Create scenes.
    var filteredScenes = data.scenes.filter((data) => data.id === id);
    var scenes = filteredScenes.map(function (data) {
      var urlPrefix = "/tiles";
      var source = Marzipano.ImageUrlSource.fromString(
        urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
        { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" }
      );

      var geometry = new Marzipano.CubeGeometry(data.levels);

      var limiter = Marzipano.RectilinearView.limit.traditional(
        data.faceSize,
        (100 * Math.PI) / 180,
        (120 * Math.PI) / 180
      );
      var view = new Marzipano.RectilinearView(
        data.initialViewParameters,
        limiter
      );

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true,
      });

      // Create link hotspots.
      data.linkHotspots!.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot);
        scene
          .hotspotContainer()
          .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      return {
        data: data,
        scene: scene,
        view: view,
      };
    });

    var autorotate = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI / 2,
    });

    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);

    function switchScene(scene: any) {
      scene.view.setParameters(scene.data.initialViewParameters);
      scene.scene.switchTo();
    }

    function createLinkHotspotElement(hotspot: any) {
      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement("div");
      wrapper.classList.add("hotspot");
      wrapper.classList.add("link-hotspot");

      // Create image element.
      var icon = document.createElement("img");
      icon.src = "/img/link.png";
      icon.classList.add("link-hotspot-icon");

      // Set rotation transform.
      var transformProperties = [
        "-ms-transform",
        "-webkit-transform",
        "transform",
      ];
      for (var i = 0; i < transformProperties.length; i++) {
        var property: any = transformProperties[i];
        icon.style[property] = "rotate(" + hotspot.rotation + "rad)";
      }

      // Add click event handler.
      wrapper.addEventListener("click", function () {
        push("/gallery");
      });

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      // Create tooltip element.
      var tooltip = document.createElement("div");
      tooltip.classList.add("hotspot-tooltip");
      tooltip.classList.add("link-hotspot-tooltip");
      tooltip.innerHTML = findSceneDataById(hotspot.target)!.name;

      wrapper.appendChild(icon);
      wrapper.appendChild(tooltip);

      return wrapper;
    }

    // Prevent touch and scroll events from reaching the parent element.
    function stopTouchAndScrollEventPropagation(element: any) {
      var eventList = [
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "wheel",
        "mousewheel",
      ];
      for (var i = 0; i < eventList.length; i++) {
        element.addEventListener(eventList[i], function (event: any) {
          event.stopPropagation();
        });
      }
    }

    function findSceneById(id: any) {
      for (var i = 0; i < scenes.length; i++) {
        if (scenes[i].data.id === id) {
          return scenes[i];
        }
      }
      return null;
    }

    function findSceneDataById(id: any) {
      for (var i = 0; i < data.scenes.length; i++) {
        if (data.scenes[i].id === id) {
          return data.scenes[i];
        }
      }
      return null;
    }

    // Display the initial scene.
    switchScene(scenes[0]);
  }, []);

  return (
    <div className="h-screen-relative">
      <div className="h-full w-full absolute" ref={panoRef}></div>
      {id !== "0" && (
        <div
          className={`${lora.className} absolute bottom-0 inset-x-0 h-16 bg-[#FFF9F9] flex items-center text-[#F66F6F] rounded-tl-[45px] font-medium px-8 text-lg`}
        >
          <Link href="/gallery" className="flex items-center gap-2">
            <Image
              src="/ic-back-pink.svg"
              alt="link"
              width={24}
              height={24}
              priority
            />
            <span>Back to gallery</span>
          </Link>
          <Image
            src="/flower.png"
            alt="flower"
            width={120}
            height={120}
            priority
            className="absolute bottom-0 right-0"
          />
        </div>
      )}
    </div>
  );
}

export default Place;
