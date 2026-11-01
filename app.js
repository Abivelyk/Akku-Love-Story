(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const ASSET_ROOT = "./assets/";
  const PHOTOS = [
    { id: 1, file: "p01.jpg", title: "The first little universe", note: "Where the archive begins — one frame that quietly changed the gravity of ordinary days." },
    { id: 2, file: "p02.jpg", title: "Quiet light", note: "Soft light that did not need to try hard to make everything around it calmer." },
    { id: 3, file: "p03.jpg", title: "One of those days", note: "The kind of day that looks simple on the calendar and stays forever in your head." },
    { id: 4, file: "p04.jpg", title: "A soft moment", note: "Unrushed, unscripted, and gentler than everything else happening that week." },
    { id: 5, file: "p05.jpg", title: "The kind worth keeping", note: "If memories had a shelf, this one would sit right at eye level." },
    { id: 6, file: "p06.jpg", title: "A frame that stayed", note: "Long after the moment passed, the feeling of this frame refused to fade." },
    { id: 7, file: "p07.jpg", title: "A tiny piece of summer", note: "Warmth stored away for whenever the evenings turn a little too cold." },
    { id: 8, file: "p08.jpg", title: "A little chaos", note: "Because the best laughs always arrive right in the middle of unscripted chaos." },
    { id: 9, file: "p09.jpg", title: "A memory in focus", note: "Everything in the background blurs out; only the warmth stays sharp." },
    { id: 10, file: "p10.jpg", title: "The face behind the feeling", note: "For you, always. The exact expression that turns a normal hour into a favorite one." },
    { id: 11, file: "p11.jpg", title: "A day I would replay", note: "No edits, no fast-forwarding — just pressing replay from the very first minute." },
    { id: 12, file: "p12.jpg", title: "Warmth, somehow", note: "Even through a screen, some photographs carry their own temperature." },
    { id: 13, file: "p13.jpg", title: "Another ordinary miracle", note: "Proof that magic is mostly just two people paying attention to the small things." },
    { id: 14, file: "p14.jpg", title: "A picture with a heartbeat", note: "Still on the outside, completely alive if you know the story behind it." },
    { id: 15, file: "p15.jpg", title: "The details matter", note: "The little expressions in the corner of a second that nobody else noticed." },
    { id: 16, file: "p16.jpg", title: "Nothing loud, just real", note: "No grand announcement needed — honesty always looks better in quiet light." },
    { id: 17, file: "p17.jpg", title: "The smile that wins", note: "Every single argument with a bad mood loses the second this smile shows up." },
    { id: 18, file: "p18.jpg", title: "A frame for later", note: "Tucked into the archive for future us to open and smile at." },
    { id: 19, file: "p19.jpg", title: "The calm between things", note: "A deep breath captured in the middle of a fast-moving world." },
    { id: 20, file: "p20.jpg", title: "This one feels like home", note: "Home is rarely a building; most of the time it looks a lot like this." },
    { id: 21, file: "p21.jpg", title: "A little closer", note: "When the distance disappears and the conversation does not need words." },
    { id: 22, file: "p22.jpg", title: "A day worth remembering", note: "Marked with a glowing pin on the map of everything good." },
    { id: 23, file: "p23.jpg", title: "The part I kept", note: "Out of a thousand fleeting minutes, this is the one that stayed behind." },
    { id: 24, file: "p24.jpg", title: "The softest proof", note: "Gentle evidence that what we shared was real, unforced, and rare." },
    { id: 25, file: "p25.jpg", title: "Saved for forever", note: "I was so wrong not to doubt your Medellin, tangerine dreams." },
    { id: 26, file: "p26.jpg", title: "The last photograph", note: "The last frame in the garden, and the doorway back to the very beginning." }
  ];

  const OPEN_WHEN = [
    { label: "When you need a smile", title: "For a quick smile", image: "p17.jpg", body: "Remember the jokes that made zero sense to anyone else on earth and still had us laughing until we could not breathe? That version of you is my favorite thing in the universe." },
    { label: "At 2 AM", title: "For the quiet hours", image: "p19.jpg", body: "The late-night conversations that wandered everywhere and nowhere somehow made the night smaller. Close your eyes knowing you are deeply cared for." },
    { label: "On a heavy day", title: "When today took too much", image: "p04.jpg", body: "You do not have to fix everything tonight. Take a slow breath, let Jaavedaan Hai play softly, and remember that you are allowed to just rest." },
    { label: "When you miss our talks", title: "When the silence feels loud", image: "p20.jpg", body: "Some connections do not fade when the room goes quiet. Every random check-in and shared look is safely stored right here." },
    { label: "When you doubt yourself", title: "Look at how much light you carry", image: "p10.jpg", body: "Never forget how rare your heart is. Someone made an entire little garden because ordinary words felt too small for you." },
    { label: "For a tangerine dream", title: "Saved for forever", image: "p25.jpg", body: "I was so wrong not to doubt your Medellin, tangerine dreams. Keep the ordinary details and let the good parts stay good." }
  ];

  const REASONS = [
    "Because even the quietest five minutes with you feel warmer than a whole crowded room.",
    "Because our inside jokes make zero sense to anyone else and are still the funniest things alive.",
    "Because you make ordinary days glow without even realizing you are doing it.",
    "Because listening properly and showing up gently is rarer than any grand gesture.",
    "Because that smile really does win every single time.",
    "Because late-night conversations with you always made the night feel smaller and kinder.",
    "Because learning the shape of your heart slowly and imperfectly was worth every second.",
    "Because a normal paragraph felt too small for you, so only a little garden would do."
  ];

  const LOVE_LETTER = "You do not need a special day to deserve being reminded how loved you are. I love the little things: our jokes that make sense only to us, the conversations that wander, and all the ordinary days that somehow stay. You deserve to feel cared for on your easiest days and your hardest ones. If the world feels heavy, come back here and remember: you matter to me, exactly as you are. I would choose every small beginning, every laugh, every late-night talk, and every ordinary miracle that brought me to you. Always.";

  function asset(name) { return ASSET_ROOT + name; }

  const gallery = document.getElementById("memory-gallery");
  const lightbox = document.getElementById("photo-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxNote = document.getElementById("lightbox-note");
  let activePhoto = 0;

  function renderGallery() {
    PHOTOS.forEach(function (photo, index) {
      const button = document.createElement("button");
      button.className = "memory-card reveal";
      button.type = "button";
      button.dataset.photoIndex = String(index);
      button.setAttribute("aria-label", "Open memory " + String(photo.id).padStart(2, "0") + ": " + photo.title);

      const image = document.createElement("img");
      image.src = asset(photo.file);
      image.alt = photo.title;
      image.loading = "lazy";
      image.decoding = "async";

      const number = document.createElement("span");
      number.className = "memory-card-number";
      number.textContent = String(photo.id).padStart(2, "0") + " / 26";

      const title = document.createElement("span");
      title.className = "memory-card-title";
      title.textContent = photo.title;

      button.appendChild(image);
      button.appendChild(number);
      button.appendChild(title);
      gallery.appendChild(button);
    });
  }

  function showPhoto(index, openDialog) {
    activePhoto = (index + PHOTOS.length) % PHOTOS.length;
    const photo = PHOTOS[activePhoto];
    lightboxImage.src = asset(photo.file);
    lightboxImage.alt = photo.title;
    lightboxTitle.textContent = String(photo.id).padStart(2, "0") + " · " + photo.title;
    lightboxNote.textContent = photo.note;
    if (openDialog && !lightbox.open) lightbox.showModal();
  }

  renderGallery();
  showPhoto(0, false);

  document.addEventListener("click", function (event) {
    const photoButton = event.target.closest("[data-open-photo], [data-photo-index]");
    if (!photoButton) return;
    const index = photoButton.hasAttribute("data-open-photo")
      ? Number(photoButton.dataset.openPhoto)
      : Number(photoButton.dataset.photoIndex);
    showPhoto(index, true);
  });

  document.getElementById("lightbox-close").addEventListener("click", function () { lightbox.close(); });
  document.getElementById("lightbox-prev").addEventListener("click", function () { showPhoto(activePhoto - 1, false); });
  document.getElementById("lightbox-next").addEventListener("click", function () { showPhoto(activePhoto + 1, false); });
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) lightbox.close();
  });
  document.addEventListener("keydown", function (event) {
    if (!lightbox.open) return;
    if (event.key === "ArrowRight") showPhoto(activePhoto + 1, false);
    if (event.key === "ArrowLeft") showPhoto(activePhoto - 1, false);
  });

  const reasonText = document.getElementById("reason-text");
  let reasonIndex = 2;
  document.getElementById("reason-button").addEventListener("click", function () {
    reasonIndex = (reasonIndex + 1) % REASONS.length;
    reasonText.classList.remove("reason-change");
    void reasonText.offsetWidth;
    reasonText.textContent = REASONS[reasonIndex];
    reasonText.classList.add("reason-change");
    createPetalBurst();
  });

  const openWhenList = document.getElementById("open-when-list");
  const openWhenImage = document.getElementById("open-when-image");
  const openWhenLabel = document.getElementById("open-when-label");
  const openWhenTitle = document.getElementById("open-when-title");
  const openWhenBody = document.getElementById("open-when-body");

  function displayOpenWhen(index) {
    const note = OPEN_WHEN[index];
    openWhenImage.src = asset(note.image);
    openWhenImage.alt = note.title;
    openWhenLabel.textContent = "OPEN WHEN · " + note.label;
    openWhenTitle.textContent = note.title;
    openWhenBody.textContent = note.body;
    openWhenList.querySelectorAll("button").forEach(function (button, buttonIndex) {
      button.setAttribute("aria-selected", String(buttonIndex === index));
      button.tabIndex = buttonIndex === index ? 0 : -1;
    });
  }

  OPEN_WHEN.forEach(function (note, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "when-button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "open-when-panel");
    button.setAttribute("aria-selected", String(index === 0));
    button.tabIndex = index === 0 ? 0 : -1;
    button.textContent = note.label;
    button.addEventListener("click", function () { displayOpenWhen(index); });
    button.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const next = (index + (event.key === "ArrowRight" ? 1 : -1) + OPEN_WHEN.length) % OPEN_WHEN.length;
      const nextButton = openWhenList.querySelectorAll("button")[next];
      nextButton.focus();
      displayOpenWhen(next);
    });
    openWhenList.appendChild(button);
  });
  displayOpenWhen(0);

  const letterButton = document.getElementById("letter-open");
  const letterContent = document.getElementById("letter-content");
  const letterText = document.getElementById("letter-text");
  let letterTimeout = 0;
  let letterOpened = false;

  letterButton.addEventListener("click", function () {
    if (!letterOpened) {
      letterOpened = true;
      letterButton.setAttribute("aria-expanded", "true");
      letterButton.textContent = "Your letter is open";
      letterContent.hidden = false;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        letterText.textContent = LOVE_LETTER;
      } else {
        let position = 0;
        function writeNext() {
          position += 2;
          letterText.textContent = LOVE_LETTER.slice(0, position);
          if (position < LOVE_LETTER.length) letterTimeout = window.setTimeout(writeNext, 18);
        }
        writeNext();
      }
    } else {
      window.clearTimeout(letterTimeout);
      letterText.textContent = LOVE_LETTER;
    }
  });

  const finaleWhisper = document.getElementById("finale-whisper");
  const closingNotes = [
    "I would still pick you in every version of this story.",
    "You are my favorite place to come back to.",
    "Same places. Different skies. Always you."
  ];
  let closingIndex = 0;
  document.getElementById("send-love").addEventListener("click", function () {
    finaleWhisper.textContent = closingNotes[closingIndex % closingNotes.length];
    closingIndex += 1;
    createPetalBurst();
  });

  const audio = document.getElementById("garden-song");
  const soundButton = document.getElementById("sound-toggle");
  const soundLabel = document.getElementById("sound-label");
  soundButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().then(function () {
        soundButton.setAttribute("aria-pressed", "true");
        soundButton.setAttribute("aria-label", "Pause our song");
        soundLabel.textContent = "Song playing";
      }).catch(function () {
        soundLabel.textContent = "Tap to play";
      });
    } else {
      audio.pause();
      soundButton.setAttribute("aria-pressed", "false");
      soundButton.setAttribute("aria-label", "Play our song");
      soundLabel.textContent = "Sound off";
    }
  });
  audio.addEventListener("ended", function () {
    soundButton.setAttribute("aria-pressed", "false");
    soundLabel.textContent = "Sound off";
  });

  const video = document.getElementById("memory-film");
  const clipPicker = document.getElementById("clip-picker");
  const filmLabel = document.getElementById("film-label");
  const filmPlayButton = document.getElementById("film-play");
  let selectedClip = 2;
  let loadedClip = 0;

  function setClip(index) {
    selectedClip = index;
    clipPicker.querySelectorAll("button").forEach(function (button, buttonIndex) {
      button.setAttribute("aria-pressed", String(buttonIndex === index - 1));
    });
    filmLabel.textContent = "FILM " + String(index).padStart(2, "0") + " · READY WHEN YOU ARE";
    video.poster = asset(index <= 4 ? "v02.webp" : "v03.webp");
  }

  for (let clip = 1; clip <= 8; clip += 1) {
    const button = document.createElement("button");
    button.className = "clip-button";
    button.type = "button";
    button.textContent = "Film " + String(clip).padStart(2, "0");
    button.setAttribute("aria-pressed", String(clip === selectedClip));
    button.addEventListener("click", function () { setClip(clip); });
    clipPicker.appendChild(button);
  }
  setClip(selectedClip);

  filmPlayButton.addEventListener("click", function () {
    const source = "clip" + String(selectedClip).padStart(2, "0") + ".mp4";
    if (loadedClip !== selectedClip) {
      video.pause();
      video.src = asset(source);
      video.load();
      loadedClip = selectedClip;
    }
    audio.pause();
    soundButton.setAttribute("aria-pressed", "false");
    soundLabel.textContent = "Sound off";
    video.play().catch(function () {
      filmLabel.textContent = "Press play in the film window";
    });
  });
  video.addEventListener("play", function () {
    filmLabel.textContent = "NOW PLAYING · FILM " + String(selectedClip).padStart(2, "0");
  });
  video.addEventListener("ended", function () {
    filmLabel.textContent = "A little moment to keep.";
  });

  const chapterSections = Array.from(document.querySelectorAll("[data-scene]"));
  const chapterLinks = Array.from(document.querySelectorAll(".chapter-dot"));
  const headerLinks = Array.from(document.querySelectorAll(".chapter-nav a"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -4% 0px" });
    document.querySelectorAll(".reveal").forEach(function (element) { revealObserver.observe(element); });

    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.id;
        chapterLinks.forEach(function (link) {
          const active = link.getAttribute("href") === "#" + activeId;
          link.classList.toggle("is-active", active);
        });
        headerLinks.forEach(function (link) {
          link.setAttribute("aria-current", link.getAttribute("href") === "#" + activeId ? "location" : "false");
        });
      });
    }, { threshold: 0, rootMargin: "-43% 0px -43% 0px" });
    chapterSections.forEach(function (section) { sectionObserver.observe(section); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (element) { element.classList.add("is-visible"); });
  }

  let targetScroll = 0;
  function readScroll() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    targetScroll = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    document.documentElement.style.setProperty("--page-progress", (targetScroll * 100).toFixed(2) + "%");
  }
  window.addEventListener("scroll", readScroll, { passive: true });
  window.addEventListener("resize", readScroll, { passive: true });
  readScroll();

  let renderer = null;
  let scene = null;
  let camera = null;
  let animationId = 0;
  let smoothedScroll = 0;
  let pointerX = 0;
  let pointerY = 0;
  let lastTime = 0;
  let fireflyMaterial = null;
  const activePetals = [];
  const isCompact = window.matchMedia("(max-width: 760px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.getElementById("garden-canvas");

  function addGardenTexture() {
    const loader = new THREE.TextureLoader();
    loader.load(asset("moonlit-garden.jpg"), function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.encoding = THREE.sRGBEncoding;
      scene.background = texture;
    });
  }

  function addLightGarden() {
    scene.add(new THREE.HemisphereLight(0xffe3dc, 0x191224, 1.05));
    const moon = new THREE.DirectionalLight(0xe5d7ff, 1.2);
    moon.position.set(-7, 10, -18);
    scene.add(moon);

    [-12, -38, -64].forEach(function (z) {
      const lamp = new THREE.PointLight(0xffb87d, 2.4, 28, 1.6);
      lamp.position.set(Math.sin(z * .08) * 2.6, 3.7, z);
      scene.add(lamp);
    });
  }

  function addPath() {
    const stoneGeometry = new THREE.BoxGeometry(2.8, .12, 2.45);
    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x30252d, roughness: .88, metalness: .04
    });
    for (let index = 0; index < 33; index += 1) {
      const z = -1 - index * 3.1;
      const bend = Math.sin(index * .19) * .8;
      const stone = new THREE.Mesh(stoneGeometry, stoneMaterial);
      stone.position.set(bend, -.24, z);
      stone.scale.set(.9 + (index % 3) * .06, 1, .9 + (index % 4) * .035);
      stone.rotation.y = Math.sin(index * .21) * .045;
      scene.add(stone);
    }

    [-2.2, 2.2].forEach(function (edge) {
      const points = [];
      for (let index = 0; index <= 8; index += 1) {
        const progress = index / 8;
        const z = -1 - progress * 102;
        const x = Math.sin(progress * 8.2) * .8 + edge;
        points.push(new THREE.Vector3(x, -.1, z));
      }
      const railCurve = new THREE.CatmullRomCurve3(points);
      const rail = new THREE.Mesh(
        new THREE.TubeGeometry(railCurve, 120, .015, 6, false),
        new THREE.MeshStandardMaterial({ color: 0x9c777a, metalness: .32, roughness: .62 })
      );
      scene.add(rail);
    });
  }

  function addArch(z) {
    const points = [
      new THREE.Vector3(-4, .05, z),
      new THREE.Vector3(-4, 2.6, z),
      new THREE.Vector3(-3.4, 4.9, z),
      new THREE.Vector3(-1.8, 6.0, z),
      new THREE.Vector3(0, 6.2, z),
      new THREE.Vector3(1.8, 6.0, z),
      new THREE.Vector3(3.4, 4.9, z),
      new THREE.Vector3(4, 2.6, z),
      new THREE.Vector3(4, .05, z)
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    const arch = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 80, .11, 8, false),
      new THREE.MeshStandardMaterial({
        color: 0x9f6b69, metalness: .36, roughness: .4,
        emissive: 0x241018, emissiveIntensity: .42
      })
    );
    scene.add(arch);
    const crown = new THREE.PointLight(0xffc59c, 1.2, 18, 1.8);
    crown.position.set(0, 5.9, z);
    scene.add(crown);
  }

  function addRoseBeds() {
    const petalGeometry = new THREE.SphereGeometry(1, 8, 6);
    const colors = [0x8f3d55, 0xc47882, 0xe4b09e];
    const instanceCount = isCompact ? 72 : 168;
    const roseMeshes = colors.map(function (color) {
      const mesh = new THREE.InstancedMesh(
        petalGeometry,
        new THREE.MeshStandardMaterial({ color: color, roughness: .48, metalness: .06 }),
        instanceCount
      );
      mesh.count = 0;
      scene.add(mesh);
      return mesh;
    });

    const dummy = new THREE.Object3D();
    let total = 0;
    for (let cluster = 0; cluster < 21; cluster += 1) {
      const z = 4 - cluster * 4.4;
      const side = cluster % 2 === 0 ? -1 : 1;
      const baseX = Math.sin(cluster * .42) * .8 + side * (3.5 + (cluster % 3) * .38);
      const baseY = .65 + (cluster % 4) * .28;
      const mesh = roseMeshes[cluster % colors.length];
      for (let petal = 0; petal < 8; petal += 1) {
        if (total >= instanceCount * colors.length) break;
        const angle = petal * Math.PI / 4 + cluster * .26;
        dummy.position.set(
          baseX + Math.cos(angle) * .22,
          baseY + Math.sin(angle * 2) * .055,
          z + Math.sin(angle) * .22
        );
        dummy.rotation.set(.2 + (petal % 3) * .12, angle, .18 + Math.cos(angle) * .2);
        dummy.scale.set(.2, .065, .33);
        dummy.updateMatrix();
        mesh.setMatrixAt(mesh.count, dummy.matrix);
        mesh.count += 1;
        total += 1;
      }
    }
    roseMeshes.forEach(function (mesh) { mesh.instanceMatrix.needsUpdate = true; });

    const emberCount = isCompact ? 80 : 160;
    const positions = new Float32Array(emberCount * 3);
    for (let index = 0; index < emberCount; index += 1) {
      positions[index * 3] = (Math.random() - .5) * 22;
      positions[index * 3 + 1] = Math.random() * 8;
      positions[index * 3 + 2] = 8 - Math.random() * 100;
    }
    const emberGeometry = new THREE.BufferGeometry();
    emberGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    fireflyMaterial = new THREE.PointsMaterial({
      color: 0xffd8ad, size: isCompact ? .065 : .075, transparent: true, opacity: .72, depthWrite: false
    });
    scene.add(new THREE.Points(emberGeometry, fireflyMaterial));
  }

  function buildPhotoFrames() {
    const selected = [0, 3, 7, 9, 16, 19, 24, 25];
    const textureLoader = new THREE.TextureLoader();
    const maxConcurrent = isCompact ? 2 : 3;
    const queue = [];
    let loading = 0;

    function pumpTextures() {
      while (loading < maxConcurrent && queue.length) {
        const task = queue.shift();
        loading += 1;
        textureLoader.load(asset(task.photo.file), function (texture) {
          texture.encoding = THREE.sRGBEncoding;
          task.image.material.map = texture;
          task.image.material.color.set(0xffffff);
          task.image.material.needsUpdate = true;
          loading -= 1;
          pumpTextures();
        }, undefined, function () {
          loading -= 1;
          pumpTextures();
        });
      }
    }

    selected.forEach(function (photoIndex, index) {
      const photo = PHOTOS[photoIndex];
      const side = index % 2 === 0 ? 1 : -1;
      const group = new THREE.Group();
      const frameMaterial = new THREE.MeshStandardMaterial({
        color: 0x997052, metalness: .62, roughness: .35
      });
      const darkWood = new THREE.MeshStandardMaterial({
        color: 0x24191d, metalness: .12, roughness: .55
      });
      const backing = new THREE.Mesh(new THREE.BoxGeometry(2.12, 2.88, .22), darkWood);
      group.add(backing);

      const imageMaterial = new THREE.MeshBasicMaterial({ color: 0x4c3941, side: THREE.FrontSide });
      const image = new THREE.Mesh(new THREE.PlaneGeometry(1.72, 2.34), imageMaterial);
      image.position.z = .126;
      group.add(image);

      const frameBars = [
        [2.08,.105,.15,0,1.39,.03],
        [2.08,.105,.15,0,-1.39,.03],
        [.105,2.7,.15,-.99,0,.03],
        [.105,2.7,.15,.99,0,.03]
      ];
      frameBars.forEach(function (bar) {
        const edge = new THREE.Mesh(new THREE.BoxGeometry(bar[0],bar[1],bar[2]), frameMaterial);
        edge.position.set(bar[3],bar[4],bar[5]);
        group.add(edge);
      });

      const mat = new THREE.MeshBasicMaterial({ color: 0x4c3941 });
      const photoPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.66, 2.28), mat);
      photoPlane.position.z = .156;
      group.add(photoPlane);

      group.position.set(side * 5.25, 3.05, -5 - index * 10.5);
      group.rotation.y = side > 0 ? -.34 : .34;
      group.rotation.z = index % 3 === 0 ? -.025 : .022;
      group.userData.sway = index * .63;
      scene.add(group);
      queue.push({ photo: photo, image: photoPlane });

      const roseGlow = new THREE.PointLight(0xffb889, .75, 12, 2);
      roseGlow.position.set(side * 4.8, 4.9, -7 - index * 10.5);
      scene.add(roseGlow);
    });
    pumpTextures();
  }

  function createPetalBurst() {
    if (!scene || !camera) return;
    const material = new THREE.MeshStandardMaterial({
      color: 0xd88797, roughness: .42, side: THREE.DoubleSide, emissive: 0x40111d, emissiveIntensity: .18
    });
    const geometry = new THREE.SphereGeometry(1, 8, 5);
    const origin = new THREE.Vector3(camera.position.x, camera.position.y + .3, camera.position.z - 5);
    for (let index = 0; index < 30; index += 1) {
      const petal = new THREE.Mesh(geometry, material);
      petal.position.copy(origin);
      petal.position.x += (Math.random() - .5) * 4.8;
      petal.position.y += (Math.random() - .3) * 3.3;
      petal.scale.set(.08 + Math.random() * .08, .035, .2 + Math.random() * .16);
      petal.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      scene.add(petal);
      activePetals.push({
        mesh: petal,
        vx: (Math.random() - .5) * 1.35,
        vy: .45 + Math.random() * 1.25,
        vz: (Math.random() - .5) * .75,
        spin: (Math.random() - .5) * 2.2,
        life: 0
      });
    }
  }

  function animate(now) {
    animationId = window.requestAnimationFrame(animate);
    if (!renderer || !scene || !camera) return;
    if (document.hidden) return;
    const delta = Math.min(.04, lastTime ? (now - lastTime) / 1000 : .016);
    lastTime = now;

    if (!reducedMotion) smoothedScroll += (targetScroll - smoothedScroll) * .075;
    else smoothedScroll = targetScroll;

    const curve = smoothedScroll;
    const destinationZ = 11 - curve * 96;
    const destinationX = Math.sin(curve * 8.4) * 1.08 + pointerX * .42;
    const destinationY = 2.3 + Math.sin(curve * 6.1) * .26 - pointerY * .18;
    camera.position.x += (destinationX - camera.position.x) * (reducedMotion ? 1 : .055);
    camera.position.y += (destinationY - camera.position.y) * (reducedMotion ? 1 : .055);
    camera.position.z += (destinationZ - camera.position.z) * (reducedMotion ? 1 : .08);
    camera.lookAt(
      Math.sin(curve * 8.4) * 1.1 + pointerX * .18,
      2.45 + Math.sin(curve * 4.2) * .18,
      camera.position.z - 24
    );

    if (fireflyMaterial && !reducedMotion) {
      fireflyMaterial.opacity = .58 + Math.sin(now * .0015) * .14;
    }
    for (let index = activePetals.length - 1; index >= 0; index -= 1) {
      const petal = activePetals[index];
      petal.life += delta;
      petal.mesh.position.x += petal.vx * delta;
      petal.mesh.position.y += petal.vy * delta;
      petal.mesh.position.z += petal.vz * delta;
      petal.mesh.rotation.x += petal.spin * delta;
      petal.mesh.rotation.z += petal.spin * .7 * delta;
      petal.vy -= delta * .56;
      petal.mesh.material.opacity = Math.max(0, 1 - petal.life / 3.1);
      petal.mesh.material.transparent = true;
      if (petal.life > 3.1) {
        scene.remove(petal.mesh);
        activePetals.splice(index, 1);
      }
    }
    renderer.render(scene, camera);
  }

  function initGarden() {
    if (!window.THREE || !canvas) return;
    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, .1, 180);
      camera.position.set(0, 2.3, 11);
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: false,
        antialias: false,
        powerPreference: "low-power",
        depth: true,
        stencil: false
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCompact ? 1.1 : 1.55));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;

      addGardenTexture();
      addLightGarden();
      addPath();
      addArch(-38);
      addArch(-66);
      addArch(-94);
      addRoseBeds();
      buildPhotoFrames();

      window.addEventListener("resize", function () {
        if (!renderer || !camera) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCompact ? 1.1 : 1.55));
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      }, { passive: true });

      if (!isCompact && !reducedMotion) {
        window.addEventListener("pointermove", function (event) {
          pointerX = (event.clientX / window.innerWidth - .5) * 2;
          pointerY = (event.clientY / window.innerHeight - .5) * 2;
        }, { passive: true });
      }
      document.addEventListener("visibilitychange", function () {
        if (!document.hidden) lastTime = 0;
      });
      animationId = window.requestAnimationFrame(animate);
    } catch (error) {
      console.warn("The 3D garden fell back to its still image.", error);
    }
  }

  const threeScript = document.querySelector('script[src*="three.min.js"]');
  if (window.THREE) initGarden();
  else if (threeScript) threeScript.addEventListener("load", initGarden, { once: true });
})();
