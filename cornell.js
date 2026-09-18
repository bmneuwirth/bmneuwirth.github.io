// Cornell box for the masthead. Geometry and reflectances are the Cornell
// Program of Computer Graphics reference data; the lighting is a path-traced
// irradiance bake (see images/cornell/), so nothing here computes light -- the
// shader is a texture lookup. Falls back to an empty canvas without WebGL.
(function () {
  'use strict';
  var TEX_BASE = new URL('images/cornell/', document.currentScript.src);
  var F = [{"p": [556.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 559.2, 556.0, 0.0, 559.2], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-00.png", "a": 1.0}, {"p": [556.0, 548.8, 0.0, 556.0, 548.8, 559.2, 0.0, 548.8, 559.2, 0.0, 548.8, 0.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-01.png", "a": 1.0}, {"p": [556.0, 0.0, 559.2, 0.0, 0.0, 559.2, 0.0, 548.8, 559.2, 556.0, 548.8, 559.2], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-02.png", "a": 1.0}, {"p": [0.0, 0.0, 559.2, 0.0, 0.0, 0.0, 0.0, 548.8, 0.0, 0.0, 548.8, 559.2], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-03.png", "a": 1.0}, {"p": [556.0, 0.0, 0.0, 556.0, 0.0, 559.2, 556.0, 548.8, 559.2, 556.0, 548.8, 0.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-04.png", "a": 1.0}, {"p": [343.0, 548.7, 227.0, 343.0, 548.7, 332.0, 213.0, 548.7, 332.0, 213.0, 548.7, 227.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-05.png", "a": 1.0}, {"p": [130.0, 165.0, 65.0, 82.0, 165.0, 225.0, 240.0, 165.0, 272.0, 290.0, 165.0, 114.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-06.png", "a": 1.0}, {"p": [290.0, 0.0, 114.0, 290.0, 165.0, 114.0, 240.0, 165.0, 272.0, 240.0, 0.0, 272.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-07.png", "a": 1.0}, {"p": [130.0, 0.0, 65.0, 130.0, 165.0, 65.0, 290.0, 165.0, 114.0, 290.0, 0.0, 114.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-08.png", "a": 1.0}, {"p": [82.0, 0.0, 225.0, 82.0, 165.0, 225.0, 130.0, 165.0, 65.0, 130.0, 0.0, 65.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-09.png", "a": 1.0}, {"p": [240.0, 0.0, 272.0, 240.0, 165.0, 272.0, 82.0, 165.0, 225.0, 82.0, 0.0, 225.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-10.png", "a": 1.0}, {"p": [423.0, 330.0, 247.0, 265.0, 330.0, 296.0, 314.0, 330.0, 456.0, 472.0, 330.0, 406.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-11.png", "a": 1.0}, {"p": [423.0, 0.0, 247.0, 423.0, 330.0, 247.0, 472.0, 330.0, 406.0, 472.0, 0.0, 406.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-12.png", "a": 1.0}, {"p": [472.0, 0.0, 406.0, 472.0, 330.0, 406.0, 314.0, 330.0, 456.0, 314.0, 0.0, 456.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-13.png", "a": 1.0}, {"p": [314.0, 0.0, 456.0, 314.0, 330.0, 456.0, 265.0, 330.0, 296.0, 265.0, 0.0, 296.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-14.png", "a": 1.0}, {"p": [265.0, 0.0, 296.0, 265.0, 330.0, 296.0, 423.0, 330.0, 247.0, 423.0, 0.0, 247.0], "uv": [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0], "src": "lm-15.png", "a": 1.0}, {"p": [0, 0, 0, 556, 0, 0, 556, 548.8, 0, 0, 548.8, 0], "uv": [0, 0, 1, 0, 1, 1, 0, 1], "rgb": [150, 148, 143], "a": 0.35}];
  var PIVOT = [278, 274.4, 279.6];
  var FOVY = 2 * Math.atan((0.025 / 2) / 0.035);   // reference: 35mm focal, 25mm film
  var BASE_ANGLE = 0;              // 0 == the reference view, straight into the
                                   // open face; the camera is already outside it
  var BLURB_GAP = 2;               // clearance between the box and the blurb
  var ALIGN_NUDGE = 1;             // px the heading sits below the box top; the
                                   // box measures off the h1, so moving the text
                                   // would just drag the box with it
  var SPIN_DIR = -1;               // -1 turns the box clockwise seen from above
                                   // as the page advances; +1 reverses it
  var DRAG_SCALE = 2.6;            // page px scrolled per px of horizontal drag
  var FRICTION   = 0.94;           // momentum decay per frame
  var MIN_V      = 0.4;            // below this (px/frame) momentum stops
  var DRAG_RAD = 0.009;            // radians of spin per px of touch drag
  var SPIN_FRICTION = 0.94;        // decay of flung rotation, per frame
  var AUTOSPIN_MS = 26000;         // vertical layout: one turn, on a timer
  var SCROLL_PER_TURN = 1200;      // target px of scroll per revolution; the
                                   // actual rate is rounded so the page bottom
                                   // lands on a whole number of turns

  var cv = document.getElementById('cornell');
  var box = cv && cv.parentNode;
  if (!cv) return;
  // Transparent: on narrow screens the box is pinned behind the text, so an
  // opaque canvas would paint a white rectangle over the page. premultiplied
  // must stay true -- the MSAA resolve already yields premultiplied values,
  // and declaring otherwise rims the silhouette in grey.
  var opts = { antialias: true, alpha: true, premultipliedAlpha: true };
  var gl = cv.getContext('webgl', opts) || cv.getContext('experimental-webgl', opts);
  if (!gl) return;

  function sh(t, src) {
    var s = gl.createShader(t);
    gl.shaderSource(s, src); gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  }
  var vs = sh(gl.VERTEX_SHADER,
    'attribute vec3 aPos;attribute vec2 aUV;uniform mat4 uMVP;varying vec2 vUV;' +
    'void main(){vUV=aUV;gl_Position=uMVP*vec4(aPos,1.0);}');
  var fs = sh(gl.FRAGMENT_SHADER,
    'precision mediump float;uniform sampler2D uTex;uniform float uAlpha;varying vec2 vUV;' +
    'void main(){gl_FragColor=vec4(texture2D(uTex,vUV).rgb,uAlpha);}');
  if (!vs || !fs) return;
  var prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var aPos = gl.getAttribLocation(prog, 'aPos'),
      aUV = gl.getAttribLocation(prog, 'aUV'),
      uMVP = gl.getUniformLocation(prog, 'uMVP'),
      uAlpha = gl.getUniformLocation(prog, 'uAlpha');

  var verts = [];
  F.forEach(function (f) {
    for (var k = 0; k < 4; k++)
      verts.push(f.p[k*3], f.p[k*3+1], f.p[k*3+2], f.uv[k*2], f.uv[k*2+1]);
  });
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(aPos); gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 20, 0);
  gl.enableVertexAttribArray(aUV);  gl.vertexAttribPointer(aUV,  2, gl.FLOAT, false, 20, 12);

  // Eye: keep the reference lens, pulled back far enough that the geometry
  // clears the frustum at every angle -- scroll can land on any of them. Each
  // vertex needs max(|x|,|y-eye|)/tan(fovy/2) - z of clearance; the binding
  // one over a full turn sets the distance.
  var tn = Math.tan(FOVY/2), D = 0;
  for (var a = 0; a < Math.PI * 2; a += Math.PI / 90) {
    var th = BASE_ANGLE + a, c = Math.cos(th), sn = Math.sin(th);
    for (var fi = 0; fi < F.length; fi++) {
      var pp = F[fi].p;
      for (var k = 0; k < 4; k++) {
        var x = pp[k*3] - PIVOT[0], y = pp[k*3+1], z = pp[k*3+2] - PIVOT[2];
        var rx = c*x + sn*z, rz = -sn*x + c*z;
        D = Math.max(D, Math.max(Math.abs(rx), Math.abs(y - 273)) / tn - rz);
      }
    }
  }
  D *= 1.03;
  var EYE = [278, 273, PIVOT[2] - D];

  var ready = 0, need = F.length;
  F.forEach(function (f) {
    var t = gl.createTexture(); f.t = t;
    gl.bindTexture(gl.TEXTURE_2D, t);
    if (f.rgb) {                                  // flat pane, no file needed
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE,
                    new Uint8Array(f.rgb));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if (++ready === need) start();
      return;
    }
    var img = new Image();
    img.onload = function () {
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if (++ready === need) start();
    };
    img.onerror = function () { if (++ready === need) start(); };
    img.src = new URL(f.src, TEX_BASE).href;
  });

  function mul(a, b) {
    var o = new Array(16);
    for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++)
      o[i*4+j] = a[i*4]*b[j] + a[i*4+1]*b[4+j] + a[i*4+2]*b[8+j] + a[i*4+3]*b[12+j];
    return o;
  }
  function perspective(fovy, asp, n, f) {
    var t = 1 / Math.tan(fovy/2);
    return [t/asp,0,0,0, 0,t,0,0, 0,0,(f+n)/(n-f),-1, 0,0,2*f*n/(n-f),0];
  }
  function view() {
    // Eye at EYE looking down +z with up +y. Camera-right is cross(fwd,up) =
    // (-1,0,0), so the x axis is negated. Getting this sign wrong mirrors the
    // scene, which inverts every winding and makes backface culling drop the
    // wrong faces.
    return [-1,0,0,0, 0,1,0,0, 0,0,-1,0, EYE[0], -EYE[1], EYE[2], 1];
  }
  function spin(th) {
    var c = Math.cos(th), s = Math.sin(th), p = PIVOT;
    return [c,0,-s,0, 0,1,0,0, s,0,c,0,
            p[0]-c*p[0]-s*p[2], 0, p[2]+s*p[0]-c*p[2], 1];
  }

  var V = view();
  // Cached. Reading clientWidth inside draw forces a style + layout flush every
  // frame, on a main thread a scroll has already contended. Only resize moves it.
  var cssW = 0, cssH = 0;
  function measure() { cssW = cv.clientWidth; cssH = cv.clientHeight; }
  function draw(th) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (!cssW) measure();
    var w = Math.round(cssW * dpr), h = Math.round(cssH * dpr);
    if (!w || !h) return;
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE); gl.cullFace(gl.BACK); gl.frontFace(gl.CCW);
    gl.uniformMatrix4fv(uMVP, false,
      new Float32Array(mul(mul(spin(th), V), perspective(FOVY, w/h, 1, 4000))));

    gl.disable(gl.BLEND); gl.depthMask(true); gl.uniform1f(uAlpha, 1);
    F.forEach(function (f, i) {
      if (f.a < 1) return;
      gl.bindTexture(gl.TEXTURE_2D, f.t);
      gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
    });
    gl.enable(gl.BLEND);
    // Source colours are non-premultiplied, the destination is premultiplied:
    // scale rgb by alpha, but accumulate alpha with ONE so coverage is right.
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA,
                         gl.ONE,       gl.ONE_MINUS_SRC_ALPHA);
    gl.depthMask(false);
    F.forEach(function (f, i) {
      if (f.a >= 1) return;
      gl.uniform1f(uAlpha, f.a);
      gl.bindTexture(gl.TEXTURE_2D, f.t);
      gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
    });
    gl.depthMask(true);
  }

  // Centre the drawn box on the masthead's vertical centre. The box is not
  // centred in its own canvas -- it fills ~83% of the upper half and ~82% of
  // the lower -- so both extents are projected rather than assuming symmetry.
  function alignToHeading() {
    var mast = document.querySelector('.masthead');
    if (!mast || !box) return;

    // Only the gutter layout needs measuring. Detect it from the gutter itself
    // rather than repeating the breakpoint here -- duplicating it in JS is how
    // this got out of sync and pinned the box to the body's top padding.
    var pad = parseFloat(window.getComputedStyle(document.body).paddingTop) || 0;
    var gutter = parseFloat(window.getComputedStyle(document.body).paddingLeft) || 0;
    if (gutter < 100 || getComputedStyle(box).position !== 'fixed') {
      box.style.top = '';
      mast.style.paddingTop = '';
      if (mast.nextElementSibling) mast.nextElementSibling.style.marginTop = '';
      return;
    }

    var tn = Math.tan(FOVY / 2), hi = -1e9, lo = 1e9, wide = 0;
    var c = Math.cos(BASE_ANGLE), sn = Math.sin(BASE_ANGLE);
    for (var i = 0; i < F.length; i++) {
      var p = F[i].p;
      for (var k = 0; k < 4; k++) {
        var x = p[k*3] - PIVOT[0], y = p[k*3+1], z = p[k*3+2] - PIVOT[2];
        var depth = (-sn*x + c*z) + (PIVOT[2] - EYE[2]);
        if (depth <= 0) continue;
        var ndc = (y - EYE[1]) / depth;
        if (ndc > hi) hi = ndc;
        if (ndc < lo) lo = ndc;
        var rx = Math.abs(c*x + sn*z) / depth;
        if (rx > wide) wide = rx;
      }
    }
    var H = cv.clientHeight;
    var drawnCentre = H / 2 + (-lo / tn - hi / tn) * H / 4;

    // How far the drawn box stops short of the canvas edge horizontally. The
    // box fills only ~84% of the canvas head-on, so anything aligning to the
    // canvas edge would sit that much too far out.
    document.documentElement.style.setProperty(
        '--box-inset', (cv.clientWidth / 2 * (1 - wide / tn)).toFixed(1) + 'px');

    // The box sits on the page's own top margin; the header is padded down to
    // meet its middle. Moving the header is what keeps the box from hanging
    // above the margin every other element respects.
    box.style.top = pad.toFixed(1) + 'px';

    mast.style.paddingTop = '';                 // natural height, before ours
    var h = mast.getBoundingClientRect().height;
    var lead = Math.max(0, drawnCentre - h / 2 - ALIGN_NUDGE);
    mast.style.paddingTop = lead.toFixed(1) + 'px';

    // The header is shorter than the box, so the blurb would otherwise begin
    // while the box is still beside it. Push it clear of the box's bottom.
    var blurb = mast.nextElementSibling;
    if (blurb) {
      blurb.style.marginTop = '';
      var top = blurb.getBoundingClientRect().top + (window.pageYOffset || 0);
      var want = pad + cv.clientHeight + BLURB_GAP;
      if (want > top) blurb.style.marginTop = (want - top).toFixed(1) + 'px';
    }
  }

  // Scroll-coupled rotation and drag-to-scroll are desktop affordances. On a
  // touch device they misbehave: iOS changes innerHeight as the URL bar moves,
  // so maxScroll shifts mid-scroll and the angle snaps, and the drag handler
  // fights Safari's own momentum. Touch devices always free-spin, whichever
  // layout the stylesheet is showing.
  function layout() {
    return parseFloat(window.getComputedStyle(document.body).paddingLeft) < 100
      ? 'spin' : 'scroll';
  }

  function coarsePointer() {
    return !!(window.matchMedia
      && window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }

  function start() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce && reduce.matches) { draw(BASE_ANGLE); return; }

    var mode = null, teardown = null, io = null, visible = true;

    // ---- shared -----------------------------------------------------------
    // Cached. Reading it live made the rotation snap on iOS: innerHeight
    // changes as the URL bar moves, so the denominator shifted mid-scroll.
    // Recomputed only once things settle, which keeps the whole-turn landing.
    var cachedMax = null, maxTimer = null;
    function maxScroll() {
      if (cachedMax === null) {
        var de = document.documentElement;
        cachedMax = Math.max(1, de.scrollHeight - window.innerHeight);
      }
      return cachedMax;
    }
    // Only a width change is a real resize. iOS fires resize when the URL bar
    // slides, which changes height only -- recomputing then is exactly what
    // made the rotation jump mid-scroll.
    var lastW = window.innerWidth;
    function invalidateMax(force) {
      if (!force && window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(maxTimer);
      maxTimer = setTimeout(function () { cachedMax = null; draw(angle()); }, 250);
    }
    // Page height does change as lazy images and iframes resolve.
    window.addEventListener('load', function () { invalidateMax(true); });
    // ...and it keeps changing after load, as lazy media below the fold
    // resolves while you scroll toward it, with no resize event to announce
    // it. Watch the document's own height instead: the URL bar moves
    // innerHeight, not scrollHeight, so this cannot bring back the snap.
    if (window.ResizeObserver) {
      var lastH = document.documentElement.scrollHeight;
      new ResizeObserver(function () {
        var h = document.documentElement.scrollHeight;
        if (h === lastH) return;
        lastH = h;
        invalidateMax(true);
      }).observe(document.documentElement);
    }
    function angle() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var max = maxScroll();
      // Whole number of turns closest to the requested rate, so the foot of the
      // page is head-on again. Recomputed because lazy images and iframes
      // change the page height after load.
      var turns = Math.max(1, Math.round(max / SCROLL_PER_TURN));
      return BASE_ANGLE + SPIN_DIR * (y / max) * turns * Math.PI * 2;
    }

    // ---- scroll-coupled: the gutter layout --------------------------------
    function scrollMode() {
      var dragging = false, lastX = 0, lastT = 0, vel = 0, raf = null;

      // On iOS the scroll runs in another process and rAF is divided down from
      // an adaptive display link, so callbacks land unevenly -- ~60Hz idle,
      // 45-50Hz while scrolling, stepping between intervals as the panel
      // changes rate. Mapping scroll position straight onto the angle inherits
      // that unevenness, beside text the compositor moves smoothly; the
      // unevenness, not the rate, is what reads as choppy. Easing toward the
      // target converts uneven input into even output, and converges exactly,
      // so the foot of the page still lands head-on.
      //
      // Touch only: pointer devices keep the drag, and lag is felt most in
      // direct manipulation, where the box should stay under the cursor. 1
      // takes the whole error in one frame -- snap to target and stop, which
      // is the undamped behaviour.
      var SMOOTH = coarsePointer() ? 0.25 : 1;
      var SETTLE = 0.0004;   // rad: close enough to snap and stop the loop
      var cur = angle(), prevT = 0, sraf = null;

      function frame(t) {
        var dt = prevT ? Math.min(t - prevT, 100) : 16.7;
        prevT = t;
        var target = angle();
        // Per unit time, not per callback, so a slow frame eases proportionally
        // further instead of falling behind.
        cur += (target - cur) * (1 - Math.pow(1 - SMOOTH, dt / 16.67));
        if (Math.abs(target - cur) < SETTLE) {
          cur = target; draw(cur); sraf = null; prevT = 0; return;
        }
        draw(cur);
        sraf = requestAnimationFrame(frame);
      }
      function request() {
        if (!visible || sraf !== null) return;
        prevT = 0;
        sraf = requestAnimationFrame(frame);
      }
      function atEnd(d) {
        var y = window.pageYOffset;
        return (d < 0 && y <= 0) || (d > 0 && y >= maxScroll() - 1);
      }
      function tick() {
        if (Math.abs(vel) <= MIN_V || atEnd(vel)) { vel = 0; raf = null; return; }
        window.scrollBy(0, vel);
        vel *= FRICTION;
        request();
        raf = requestAnimationFrame(tick);
      }
      function down(e) {
        dragging = true; lastX = e.clientX; lastT = e.timeStamp || Date.now();
        vel = 0;
        if (raf !== null) { cancelAnimationFrame(raf); raf = null; }
        if (cv.setPointerCapture) { try { cv.setPointerCapture(e.pointerId); } catch (_) {} }
        e.preventDefault();
      }
      function move(e) {
        if (!dragging) return;
        var t = e.timeStamp || Date.now();
        var dx = e.clientX - lastX, dt = Math.max(1, t - lastT);
        lastX = e.clientX; lastT = t;
        var d = -dx * DRAG_SCALE;                // drag left -> scroll down
        window.scrollBy(0, d);
        vel = vel * 0.7 + (d / dt * 16) * 0.3;   // low-pass, so one spike cannot fling
        request();
        e.preventDefault();
      }
      function up(e) {
        if (!dragging) return;
        dragging = false;
        if (cv.releasePointerCapture) { try { cv.releasePointerCapture(e.pointerId); } catch (_) {} }
        if (Math.abs(vel) > MIN_V && raf === null) raf = requestAnimationFrame(tick);
        else vel = 0;
      }

      window.addEventListener('scroll', request, { passive: true });
      var interactive = window.PointerEvent && !coarsePointer();
      if (interactive) {
        cv.addEventListener('pointerdown', down);
        cv.addEventListener('pointermove', move);
        cv.addEventListener('pointerup', up);
        cv.addEventListener('pointercancel', up);
        cv.addEventListener('pointerleave', up);
      }
      draw(angle());

      return function () {
        window.removeEventListener('scroll', request);
        if (interactive) {
          cv.removeEventListener('pointerdown', down);
          cv.removeEventListener('pointermove', move);
          cv.removeEventListener('pointerup', up);
          cv.removeEventListener('pointercancel', up);
          cv.removeEventListener('pointerleave', up);
        }
        if (raf !== null) cancelAnimationFrame(raf);
        if (sraf !== null) cancelAnimationFrame(sraf);
      };
    }

    // ---- free-running, drag to spin: touch and the vertical layout --------
    // Dragging turns the box itself rather than scrolling the page, so nothing
    // competes with the browser's scroller and the angle never depends on
    // maxScroll -- which is what made it snap when iOS resized mid-scroll.
    function spinMode() {
      var loop = null, t0 = null, base = 0;      // base: radians added by dragging
      var held = false, lastX = 0, lastT = 0, vel = 0, paused = 0;

      function frame(t) {
        if (t0 === null) t0 = t;
        if (!held) {
          if (Math.abs(vel) > 0.0004) { base += vel; vel *= SPIN_FRICTION; }
          else vel = 0;
        }
        var auto = held ? paused : (t - t0 - paused) / AUTOSPIN_MS * Math.PI * 2;
        draw(BASE_ANGLE + SPIN_DIR * auto + base);
        loop = requestAnimationFrame(frame);
      }
      function down(e) {
        held = true; lastX = e.clientX; lastT = e.timeStamp || Date.now(); vel = 0;
        if (cv.setPointerCapture) { try { cv.setPointerCapture(e.pointerId); } catch (_) {} }
      }
      function move(e) {
        if (!held) return;
        var t = e.timeStamp || Date.now();
        var dx = e.clientX - lastX, dt = Math.max(1, t - lastT);
        lastX = e.clientX; lastT = t;
        var r = dx * DRAG_RAD;
        base += r;
        vel = vel * 0.7 + (r / dt * 16) * 0.3;
        e.preventDefault();
      }
      function up(e) {
        if (!held) return;
        held = false;
        if (cv.releasePointerCapture) { try { cv.releasePointerCapture(e.pointerId); } catch (_) {} }
      }

      if (window.PointerEvent) {
        cv.addEventListener('pointerdown', down);
        cv.addEventListener('pointermove', move);
        cv.addEventListener('pointerup', up);
        cv.addEventListener('pointercancel', up);
        cv.addEventListener('pointerleave', up);
      }
      if (visible) loop = requestAnimationFrame(frame);

      return function () {
        if (loop !== null) cancelAnimationFrame(loop);
        loop = null;
        if (window.PointerEvent) {
          cv.removeEventListener('pointerdown', down);
          cv.removeEventListener('pointermove', move);
          cv.removeEventListener('pointerup', up);
          cv.removeEventListener('pointercancel', up);
          cv.removeEventListener('pointerleave', up);
        }
      };
    }

    function pause(on) {
      visible = on;
      if (mode === 'spin') { if (teardown) teardown(); teardown = on ? spinMode() : null; }
      else if (on && mode === 'scroll') draw(angle());
    }

    function apply() {
      var next = layout();
      if (next === mode) return;
      if (teardown) teardown();
      mode = next;
      teardown = next === 'spin' ? spinMode() : scrollMode();
    }

    if (window.IntersectionObserver) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { pause(e.isIntersecting); });
      });
      io.observe(cv);
    }

    // CSS swaps layout on rotation; the renderer has to follow it.
    function onResize() { invalidateMax(); alignToHeading(); measure(); apply(); draw(mode === 'spin' ? BASE_ANGLE : angle()); }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', function () { setTimeout(onResize, 120); });

    alignToHeading();
    measure();
    apply();
  }

})();
