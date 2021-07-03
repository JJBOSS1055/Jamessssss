import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import CatFlying from "./CatFlying/CatFlying.js";
import CatFlying2 from "./CatFlying2/CatFlying2.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";
import GlowP from "./GlowP/GlowP.js";
import GlowL from "./GlowL/GlowL.js";
import GlowA from "./GlowA/GlowA.js";
import GlowY from "./GlowY/GlowY.js";
import GlowE from "./GlowE/GlowE.js";
import GlowR from "./GlowR/GlowR.js";
import Glow1 from "./Glow1/Glow1.js";
import Glow2 from "./Glow2/Glow2.js";
import GlowW from "./GlowW/GlowW.js";
import GlowI from "./GlowI/GlowI.js";
import GlowN from "./GlowN/GlowN.js";
import GlowS from "./GlowS/GlowS.js";
import Balloon1 from "./Balloon1/Balloon1.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  CatFlying: new CatFlying({
    x: -30,
    y: 0,
    direction: 180,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  CatFlying2: new CatFlying2({
    x: 0,
    y: -200,
    direction: -90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Button2: new Button2({
    x: -30,
    y: -105,
    direction: 180,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 2
  }),
  Button3: new Button3({
    x: 40,
    y: -170,
    direction: -90,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 1
  }),
  GlowP: new GlowP({
    x: -179,
    y: 68,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  GlowL: new GlowL({
    x: -102,
    y: 64,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  GlowA: new GlowA({
    x: -25,
    y: 77,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  GlowY: new GlowY({
    x: 40,
    y: 83,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  GlowE: new GlowE({
    x: 120,
    y: 78,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  GlowR: new GlowR({
    x: 192,
    y: 85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Glow1: new Glow1({
    x: -182,
    y: -69,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Glow2: new Glow2({
    x: -184,
    y: -68,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  GlowW: new GlowW({
    x: -67,
    y: -66,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  GlowI: new GlowI({
    x: 13,
    y: -68,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  GlowN: new GlowN({
    x: 89,
    y: -70,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  GlowS: new GlowS({
    x: 159,
    y: -71,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Balloon1: new Balloon1({
    x: 119,
    y: -233,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
