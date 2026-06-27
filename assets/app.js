(function () {
  const config = window.TENGOKU_SITE_CONFIG || {};
  const downloadLinks = config.downloadLinks || {};

  const mods = [
    { name: "3d-Skin-Layers", url: "https://modrinth.com/mod/zV5r3pPn" },
    { name: "Accessories", url: "https://modrinth.com/mod/jtmvUHXj" },
    { name: "Accessories Compatibility Layer", url: "https://modrinth.com/mod/ySnjMzLg" },
    { name: "Accessorify", url: "https://modrinth.com/mod/CVRzrXGP" },
    { name: "Advancement Plaques", url: "https://modrinth.com/mod/9NM0dXub" },
    { name: "Aeronautics Camera Sync", url: "https://modrinth.com/mod/ZGxtWu73" },
    { name: "Aeronautics Wind Sound", url: "https://modrinth.com/mod/XU9MYvTx" },
    { name: "AeronauticsCompat", url: "https://modrinth.com/mod/aLVC5usA" },
    { name: "Alex's Mobs", url: "https://modrinth.com/mod/EmNhnNnt" },
    { name: "AmbientSounds", url: "https://modrinth.com/mod/fM515JnW" },
    { name: "Animal Feeding Trough", url: "https://modrinth.com/mod/bRFWnJ87" },
    { name: "Another Furniture", url: "https://modrinth.com/mod/ulloLmqG" },
    { name: "AppleSkin", url: "https://modrinth.com/mod/EsAfCjCV" },
    { name: "Architectury", url: "https://modrinth.com/mod/lhGA9TYQ" },
    { name: "Artifacts", url: "https://modrinth.com/mod/P0Mu4wcQ" },
    { name: "AttributeFix", url: "https://modrinth.com/mod/lOOpEntO" },
    { name: "Balm", url: "https://modrinth.com/mod/MBAkmtvl" },
    { name: "Better Advancements", url: "https://modrinth.com/mod/Q2OqKxDG" },
    { name: "BetterF3", url: "https://modrinth.com/mod/8shC1gFX" },
    { name: "Bookshelf", url: "https://modrinth.com/mod/uy4Cnpcm" },
    { name: "Bridging Mod", url: "https://modrinth.com/mod/lO3s8hjs" },
    { name: "Caelus API", url: "https://modrinth.com/mod/40FYwb4z" },
    { name: "Carry On", url: "https://modrinth.com/mod/joEfVgkn" },
    { name: "Carry On + Create Aeronautics Compat", url: "https://modrinth.com/mod/MpnDZ1Lx" },
    { name: "Chat Heads", url: "https://modrinth.com/mod/Wb5oqrBJ" },
    { name: "Chat Tools", url: "https://modrinth.com/mod/pbnlOdwp" },
    { name: "ChatAnimation", url: "https://modrinth.com/mod/DnNYdJsx" },
    { name: "Cherished Worlds", url: "https://modrinth.com/mod/3azQ6p0W" },
    { name: "Citadel", url: "https://modrinth.com/mod/XjY0RcQj" },
    { name: "Cloth Config v15 API", url: "https://modrinth.com/mod/9s6osm5g" },
    { name: "Clumps", url: "https://modrinth.com/mod/Wnxd13zP" },
    { name: "Collective", url: "https://modrinth.com/mod/e0M1UDsY" },
    { name: "Continuity", url: "https://modrinth.com/mod/1IjD5062" },
    { name: "Controlify", url: "https://modrinth.com/mod/DOUdJVEm" },
    { name: "Controlling", url: "https://modrinth.com/mod/xv94TkTM" },
    { name: "CoroUtil", url: "https://modrinth.com/mod/rLLJ1OZM" },
    { name: "Crafting Tweaks", url: "https://modrinth.com/mod/DMu0oBKf" },
    { name: "Create", url: "https://modrinth.com/mod/LNytGWDc" },
    { name: "Create Accessories Compat", url: "https://modrinth.com/mod/2MhMVi7C" },
    { name: "Create Aeronautics", url: "https://modrinth.com/mod/oWaK0Q19" },
    { name: "Create Aeronautics: Delivery Required", url: "https://modrinth.com/mod/hSTW3jx7" },
    { name: "Create Aeronautics: Gyroscope Stabilizers", url: "https://modrinth.com/mod/JcEFpckH" },
    { name: "Create Aeronautics: Transmission & Linkage", url: "https://modrinth.com/mod/Y1dq5ioE" },
    { name: "Create Big Cannons", url: "https://modrinth.com/mod/GWp4jCJj" },
    { name: "Create Crafts & Additions", url: "https://modrinth.com/mod/kU1G12Nn" },
    { name: "Create Deco", url: "https://modrinth.com/mod/sMvUb4Rb" },
    { name: "Create Deep Seas", url: "https://modrinth.com/mod/mva5q4qZ" },
    { name: "Create Diesel Generators", url: "https://modrinth.com/mod/ZM3tt6p1" },
    { name: "Create Encased", url: "https://modrinth.com/mod/hSSqdyU1" },
    { name: "Create Immersive TaCZ", url: "https://modrinth.com/mod/X2ZdQA3m" },
    { name: "Create Liquid Fuel", url: "https://modrinth.com/mod/sH9tXU9f" },
    { name: "Create Man of Many Planes", url: "https://modrinth.com/mod/F4Rdk2PX" },
    { name: "Create Nuclear", url: "https://modrinth.com/mod/z611fdf7" },
    { name: "Create Slice & Dice", url: "https://modrinth.com/mod/GmjmRQ0A" },
    { name: "Create Stuff & Additions", url: "https://modrinth.com/mod/aq9qUUQG" },
    { name: "Create Ultimine", url: "https://modrinth.com/mod/vUE54e5E" },
    { name: "Create: Aeroworks", url: "https://modrinth.com/mod/P26k79kP" },
    { name: "Create: Bells & Whistles", url: "https://modrinth.com/mod/gJ5afkVv" },
    { name: "Create: Bitterballen", url: "https://modrinth.com/mod/16DuAG4k" },
    { name: "Create: Central Kitchen", url: "https://modrinth.com/mod/btq68HMO" },
    { name: "Create: Connected", url: "https://modrinth.com/mod/Vg5TIO6d" },
    { name: "Create: Copper and Zinc", url: "https://modrinth.com/mod/aqYNR6rI" },
    { name: "Create: Copycats+", url: "https://modrinth.com/mod/UT2M39wf" },
    { name: "Create: Dragons Plus", url: "https://modrinth.com/mod/dzb1a5WV" },
    { name: "Create: Dreams n' Desires", url: "https://modrinth.com/mod/JmybsfWs" },
    { name: "Create: Factory", url: "https://modrinth.com/mod/j6Zt3N7W" },
    { name: "Create: Food", url: "https://modrinth.com/mod/4HnO3el1" },
    { name: "Create: Framed", url: "https://modrinth.com/mod/15fFZ3f4" },
    { name: "Create: Garnished", url: "https://modrinth.com/mod/6e2SlzR4" },
    { name: "Create: Interiors", url: "https://modrinth.com/mod/r4Knci2k" },
    { name: "Create: New Age", url: "https://modrinth.com/mod/FTeXqI9v" },
    { name: "Create: Numismatics", url: "https://modrinth.com/mod/Jdbbtt0i" },
    { name: "Create: Radars", url: "https://modrinth.com/mod/BLu2Yqfq" },
    { name: "Create: Steam 'n' Rails 1.21.1", url: "https://modrinth.com/mod/L3Jv0QZI" },
    { name: "Create: The Factory Must Grow", url: "https://modrinth.com/mod/USgVjXsk" },
    { name: "Create: Totem Factory", url: "https://modrinth.com/mod/ae2lDuIP" },
    { name: "Create: Ultimate Factory", url: "https://modrinth.com/mod/N9QToVpw" },
    { name: "Create: Winery", url: "https://modrinth.com/mod/zBuk6egG" },
    { name: "CreativeCore", url: "https://modrinth.com/mod/OsZiaDHq" },
    { name: "Cubes Without Borders", url: "https://modrinth.com/mod/ETlrkaYF" },
    { name: "Curios API", url: "https://modrinth.com/mod/vvuO3ImH" },
    { name: "Delight Lib", url: "https://modrinth.com/mod/rmDY6fYt" },
    { name: "Design n' Decor", url: "https://modrinth.com/mod/x49wilh8" },
    { name: "Do a Barrel Roll", url: "https://modrinth.com/mod/6FtRfnLg" },
    { name: "DoubleSlabs", url: "https://modrinth.com/mod/hcHS5k6e" },
    { name: "Dream Relics", url: "https://modrinth.com/mod/zU7VvEmB" },
    { name: "Dynamic Crosshair", url: "https://modrinth.com/mod/ZcR9weSm" },
    { name: "Dynamic FPS", url: "https://modrinth.com/mod/LQ3K71Q1" },
    { name: "Elytra Slot", url: "https://modrinth.com/mod/mSQF1NpT" },
    { name: "Emote Tweaks", url: "https://modrinth.com/mod/DUXvHuhO" },
    { name: "Emotecraft", url: "https://modrinth.com/mod/pZ2wrerK" },
    { name: "End's Delight", url: "https://modrinth.com/mod/yHN0njMr" },
    { name: "Entity Model Features", url: "https://modrinth.com/mod/4I1XuqiY" },
    { name: "Entity Texture Features", url: "https://modrinth.com/mod/BVzZfTc1" },
    { name: "EntityCulling", url: "https://modrinth.com/mod/NNAgCjsB" },
    { name: "Etched", url: "https://modrinth.com/mod/zi3Fnfmc" },
    { name: "Expanded Delight", url: "https://modrinth.com/mod/e9V6wFcR" },
    { name: "FTB Chunks", url: "https://www.curseforge.com/projects/314906" },
    { name: "FTB Essentials", url: "https://www.curseforge.com/projects/410811" },
    { name: "FTB Jei Extras", url: "https://www.curseforge.com/projects/1103259" },
    { name: "FTB Library", url: "https://www.curseforge.com/projects/404465" },
    { name: "FTB Promoter", url: "https://www.curseforge.com/projects/1194001" },
    { name: "FTB Quests", url: "https://www.curseforge.com/projects/289412" },
    { name: "FTB Ranks", url: "https://www.curseforge.com/projects/314905" },
    { name: "FTB Teams", url: "https://www.curseforge.com/projects/404468" },
    { name: "FTB Ultimine", url: "https://www.curseforge.com/projects/386134" },
    { name: "Farmer's Delight", url: "https://modrinth.com/mod/R2OftAxM" },
    { name: "Faz Roleplay Plus", url: "https://modrinth.com/mod/zjMFbe7B" },
    { name: "Ferrite Core", url: "https://modrinth.com/mod/uXXizFIs" },
    { name: "Forgified Fabric API", url: "https://modrinth.com/mod/Aqlf1Shp" },
    { name: "Freecam", url: "https://modrinth.com/mod/XeEZ3fK2" },
    { name: "Fusion", url: "https://modrinth.com/mod/p19vrgc2" },
    { name: "Fzzy Config", url: "https://modrinth.com/mod/hYykXjDp" },
    { name: "Highlight", url: "https://modrinth.com/mod/Vz96hXMh" },
    { name: "HoldMyItems", url: "https://www.curseforge.com/projects/1246920" },
    { name: "Iceberg", url: "https://modrinth.com/mod/5faXoLqX" },
    { name: "ImmediatelyFast", url: "https://modrinth.com/mod/5ZwdcRci" },
    { name: "Immersive Aircraft", url: "https://modrinth.com/mod/x3HZvrj6" },
    { name: "InvMove", url: "https://modrinth.com/mod/REfW2AEX" },
    { name: "Inventory Totem", url: "https://modrinth.com/mod/yQj7xqEM" },
    { name: "Iris", url: "https://modrinth.com/mod/YL57xq9U" },
    { name: "Jade", url: "https://modrinth.com/mod/nvQzSEkH" },
    { name: "Just Zoom", url: "https://modrinth.com/mod/iAiqcykM" },
    { name: "Konkrete", url: "https://modrinth.com/mod/J81TRJWm" },
    { name: "Kotlin for Forge", url: "https://modrinth.com/mod/ordsPcFz" },
    { name: "KubeJS", url: "https://modrinth.com/mod/umyGl7zF" },
    { name: "Lithium", url: "https://modrinth.com/mod/gvQqBUqZ" },
    { name: "Lootr", url: "https://modrinth.com/mod/EltpO5cN" },
    { name: "LowDragLib2", url: "https://modrinth.com/mod/B1CBVXHX" },
    { name: "M.R.U", url: "https://modrinth.com/mod/SNVQ2c0g" },
    { name: "Macaw's Doors", url: "https://modrinth.com/mod/kNxa8z3e" },
    { name: "Macaw's Roofs", url: "https://modrinth.com/mod/B8jaH3P1" },
    { name: "Macro Keybinds", url: "https://modrinth.com/mod/2loIqHKX" },
    { name: "Man of Many Planes", url: "https://modrinth.com/mod/9qdTHi0q" },
    { name: "Melody", url: "https://modrinth.com/mod/CVT4pFB2" },
    { name: "Moonlight Lib", url: "https://modrinth.com/mod/twkfQtEc" },
    { name: "More Culling", url: "https://modrinth.com/mod/51shyZVL" },
    { name: "More Delight", url: "https://modrinth.com/mod/znHQQtuU" },
    { name: "Mouse Tweaks", url: "https://modrinth.com/mod/aC3cM3Vq" },
    { name: "MouseTweaks x Accessories Fix", url: "https://modrinth.com/mod/bFBJU91s" },
    { name: "NotEnoughAnimations", url: "https://modrinth.com/mod/MPCX6s5C" },
    { name: "Ocean's Delight", url: "https://modrinth.com/mod/DGiq4ZSW" },
    { name: "OctoLib", url: "https://modrinth.com/mod/RH2KUdKJ" },
    { name: "Particle Rain", url: "https://modrinth.com/mod/nrikgvxm" },
    { name: "Particular Reforged", url: "https://modrinth.com/mod/pYFUU6cq" },
    { name: "Polymorph", url: "https://modrinth.com/mod/tagwiZkJ" },
    { name: "PonderJS", url: "https://modrinth.com/mod/5A34Stj8" },
    { name: "PrickleMC", url: "https://modrinth.com/mod/aaRl8GiW" },
    { name: "Puzzles Lib", url: "https://modrinth.com/mod/QAGBst4M" },
    { name: "Quark", url: "https://modrinth.com/mod/qnQsVE2z" },
    { name: "Rechiseled", url: "https://modrinth.com/mod/B0g2vT6l" },
    { name: "Rechiseled: Create", url: "https://modrinth.com/mod/E6867niZ" },
    { name: "Reese's Sodium Options", url: "https://modrinth.com/mod/Bh37bMuy" },
    { name: "Relics", url: "https://modrinth.com/mod/OCJRPujW" },
    { name: "Rhino", url: "https://modrinth.com/mod/sk9knFPE" },
    { name: "Ritchie's Projectile Library", url: "https://modrinth.com/mod/B3pb093D" },
    { name: "Roughly Enough Items (REI)", url: "https://modrinth.com/mod/nfn13YXA" },
    { name: "Sable", url: "https://modrinth.com/mod/T9PomCSv" },
    { name: "SableMassView", url: "https://modrinth.com/mod/f5uobnkD" },
    { name: "Searchables", url: "https://modrinth.com/mod/fuuu3xnx" },
    { name: "SeedDelight", url: "https://modrinth.com/mod/70AHjgqV" },
    { name: "Shulker Accessories", url: "https://modrinth.com/mod/4U84XG7X" },
    { name: "ShulkerBoxTooltip", url: "https://modrinth.com/mod/2M01OLQq" },
    { name: "Simple Voice Chat", url: "https://modrinth.com/mod/9eGKb6K1" },
    { name: "SimpleVoiceDistanceNeoforge", url: "https://modrinth.com/mod/cabRLxLT" },
    { name: "Sinytra Connector", url: "https://modrinth.com/mod/u58R1TMW" },
    { name: "Snowy Spirit", url: "https://modrinth.com/mod/UiFDlI7w" },
    { name: "Sodium", url: "https://modrinth.com/mod/AANobbMI" },
    { name: "Sophisticated Backpacks", url: "https://modrinth.com/mod/TyCTlI4b" },
    { name: "Sophisticated Core", url: "https://modrinth.com/mod/nmoqTijg" },
    { name: "Sound Physics Remastered", url: "https://modrinth.com/mod/qyVF9oeo" },
    { name: "Sounds", url: "https://modrinth.com/mod/ZouiUX7t" },
    { name: "SuperMartijn642's Config Library", url: "https://modrinth.com/mod/LN9BxssP" },
    { name: "SuperMartijn642's Core Lib", url: "https://modrinth.com/mod/rOUBggPv" },
    { name: "Supplementaries", url: "https://modrinth.com/mod/fFEIiSDQ" },
    { name: "TACZ-addon", url: "https://modrinth.com/mod/3Ihyt5WL" },
    { name: "TaCZ Pack Upgrader", url: "https://modrinth.com/mod/fx5N8Hgd" },
    { name: "TaCZ Tweaks", url: "https://modrinth.com/mod/H8peNuJG" },
    { name: "TerraBlender", url: "https://modrinth.com/mod/kkmrDlKT" },
    { name: "Timeless & Classics Guns: Zero", url: "https://modrinth.com/mod/OypNE65K" },
    { name: "Tool Trims", url: "https://modrinth.com/mod/uXeEiQk1" },
    { name: "TrashSlot", url: "https://modrinth.com/mod/vRYk0bv7" },
    { name: "Visual Workbench", url: "https://modrinth.com/mod/kfqD1JRw" },
    { name: "Voice Messages", url: "https://modrinth.com/mod/WWLeFuHa" },
    { name: "What Are They Up To", url: "https://modrinth.com/mod/AtB5mHky" },
    { name: "YUNG's API", url: "https://modrinth.com/mod/Ua7DFN59" },
    { name: "YUNG's Better Caves", url: "https://modrinth.com/mod/Dfu00ggU" },
    { name: "YUNG's Better Desert Temples", url: "https://modrinth.com/mod/XNlO7sBv" },
    { name: "YUNG's Better Dungeons", url: "https://modrinth.com/mod/o1C1Dkj5" },
    { name: "YUNG's Better End Island", url: "https://modrinth.com/mod/2BwBOmBQ" },
    { name: "YUNG's Better Jungle Temples", url: "https://modrinth.com/mod/z9Ve58Ih" },
    { name: "YUNG's Better Mineshafts", url: "https://modrinth.com/mod/HjmxVlSr" },
    { name: "YUNG's Better Nether Fortresses", url: "https://modrinth.com/mod/Z2mXHnxP" },
    { name: "YUNG's Better Ocean Monuments", url: "https://modrinth.com/mod/3dT9sgt4" },
    { name: "YUNG's Better Strongholds", url: "https://modrinth.com/mod/kidLKymU" },
    { name: "YUNG's Better Witch Huts", url: "https://modrinth.com/mod/t5FRdP87" },
    { name: "YUNG's Bridges", url: "https://modrinth.com/mod/Ht4BfYp6" },
    { name: "YUNG's Extras", url: "https://modrinth.com/mod/ZYgyPyfq" },
    { name: "YUNG's Menu Tweaks", url: "https://modrinth.com/mod/Hcy2DFKF" },
    { name: "YetAnotherConfigLib", url: "https://modrinth.com/mod/1eAoo2KR" },
    { name: "Zeta", url: "https://modrinth.com/mod/MVARlG2f" },
    { name: "aero_copycats", url: "https://modrinth.com/mod/wjpmYU1u" },
    { name: "oП‰o", url: "https://modrinth.com/mod/ccKDOlHs" },
    { name: "reliquified_artifacts", url: "https://modrinth.com/mod/GnU07giL" }
  ];

  const setLink = (id, href) => {
    const element = document.getElementById(id);
    if (!element || !href) {
      return;
    }
    element.href = href;
    if (/^https?:\/\//i.test(href)) {
      element.target = "_blank";
      element.rel = "noreferrer";
      element.removeAttribute("download");
    }
  };

  setLink("zip-download-link", downloadLinks.zipReleaseUrl);
  setLink("mrpack-download-link", downloadLinks.mrpackReleaseUrl);

  const modsList = document.getElementById("mods-list");
  if (modsList) {
    const fragment = document.createDocumentFragment();
    mods.forEach((mod) => {
      const link = document.createElement("a");
      link.className = "mod-link";
      link.href = mod.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.innerHTML = `<span class="mod-link__name">${mod.name}</span><span class="mod-link__arrow">Открыть</span>`;
      fragment.appendChild(link);
    });
    modsList.appendChild(fragment);
  }

  const sectionLinks = Array.from(document.querySelectorAll(".tabs__link"));
  const sections = Array.from(document.querySelectorAll("[data-section-id]")).filter(
    (element) => element.dataset.sectionId !== "hero"
  );

  const activateLink = (sectionId) => {
    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === sectionId);
    });
  };

  if (sections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          activateLink(visible.target.dataset.sectionId);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.55]
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  if (window.location.hash) {
    activateLink(window.location.hash.replace("#", ""));
  } else if (sectionLinks[0]) {
    activateLink(sectionLinks[0].dataset.section);
  }

  const infoSections = Array.from(document.querySelectorAll(".server-info"));
  infoSections.forEach((section) => {
    const trigger = section.querySelector("[data-info-toggle]");
    if (!trigger) {
      return;
    }

    const open = () => {
      section.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };

    const close = () => {
      section.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };

    trigger.addEventListener("click", () => {
      if (section.classList.contains("is-open")) {
        close();
      } else {
        infoSections.forEach((item) => {
          item.classList.remove("is-open");
          const itemTrigger = item.querySelector("[data-info-toggle]");
          if (itemTrigger) {
            itemTrigger.setAttribute("aria-expanded", "false");
          }
        });
        open();
      }
    });
  });

  const tiltCards = Array.from(document.querySelectorAll(".tilt-card"));
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 14;
      const rotateX = (0.5 - py) * 10;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
})();
