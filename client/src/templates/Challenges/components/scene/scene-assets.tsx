// TODO: get domain from env
const domain =
  'https://cdn.freecodecamp.org/curriculum/english/animation-assets';

export const sounds = `${domain}/sounds`;
const images = `${domain}/images`;
export const backgrounds = `${images}/backgrounds`;
export const characters = `${images}/characters`;

// All the character folders on our CDN. Do not add to this unless we add more characters there.
const character = {
  alice: `${characters}/alice`,
  anna: `${characters}/anna`,
  bob: `${characters}/bob`,
  brian: `${characters}/brian`,
  david: `${characters}/david`,
  jake: `${characters}/jake`,
  james: `${characters}/james`,
  linda: `${characters}/linda`,
  lisa: `${characters}/lisa`,
  maria: `${characters}/maria`,
  npc: `${characters}/npc`,
  sarah: `${characters}/sarah`,
  sophie: `${characters}/sophie`,
  tom: `${characters}/tom`,

  // Spanish:
  camila: `${characters}/camila`,
  elena: `${characters}/elena`,
  julieta: `${characters}/julieta`,
  luna: `${characters}/luna`,

  // Chinese
  chenNa: `${characters}/chen-na`,
  liHong: `${characters}/li-hong`,
  liPing: `${characters}/li-ping`,
  linYating: `${characters}/lin-yating`,
  liuMing: `${characters}/liu-ming`,
  wangHua: `${characters}/wang-hua`,
  zhangWei: `${characters}/zhang-wei`,
  zhouYongjie: `${characters}/zhou-yongjie`
};

// All the available characters on our CDN. Do not add to this unless we add more characters there.
const characterImages = {
  alice: {
    base: `${character.alice}/base.png`,
    brows: `${character.alice}/brows-neutral.png`,
    eyesClosed: `${character.alice}/eyes-closed.png`,
    eyesOpen: `${character.alice}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.alice}/mouth-smile.png`,
    mouthOpen: `${character.alice}/mouth-laugh.png`
  },
  anna: {
    base: `${character.anna}/base.png`,
    brows: `${character.anna}/brows-normal.png`,
    eyesClosed: `${character.anna}/eyes-closed.png`,
    eyesOpen: `${character.anna}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.anna}/mouth-smile.png`,
    mouthOpen: `${character.anna}/mouth-laugh.png`
  },
  bob: {
    base: `${character.bob}/base.png`,
    brows: `${character.bob}/brows-neutral.png`,
    eyesClosed: `${character.bob}/eyes-closed.png`,
    eyesOpen: `${character.bob}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.bob}/mouth-smile.png`,
    mouthOpen: `${character.bob}/mouth-laugh.png`
  },
  brian: {
    base: `${character.brian}/base.png`,
    brows: `${character.brian}/brows-neutral.png`,
    eyesClosed: `${character.brian}/eyes-closed.png`,
    eyesOpen: `${character.brian}/eyes-open.png`,
    glasses: `${character.brian}/glasses.png`,
    mouthClosed: `${character.brian}/mouth-smile.png`,
    mouthOpen: `${character.brian}/mouth-laugh.png`
  },
  david: {
    base: `${character.david}/base.png`,
    brows: `${character.david}/brows-neutral.png`,
    eyesClosed: `${character.david}/eyes-closed.png`,
    eyesOpen: `${character.david}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.david}/mouth-smile.png`,
    mouthOpen: `${character.david}/mouth-laugh.png`
  },
  jake: {
    base: `${character.jake}/base.png`,
    brows: `${character.jake}/brows.png`,
    eyesClosed: `${character.jake}/eyes-closed.png`,
    eyesOpen: `${character.jake}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.jake}/mouth-smile.png`,
    mouthOpen: `${character.jake}/mouth-laugh.png`
  },
  james: {
    base: `${character.james}/base.png`,
    brows: `${character.james}/brows-neutral.png`,
    eyesClosed: `${character.james}/eyes-closed.png`,
    eyesOpen: `${character.james}/eyes-open.png`,
    glasses: `${character.james}/glasses.png`,
    mouthClosed: `${character.james}/mouth-smile.png`,
    mouthOpen: `${character.james}/mouth-laugh.png`
  },
  linda: {
    base: `${character.linda}/base.png`,
    brows: `${character.linda}/brows-neutral.png`,
    eyesClosed: `${character.linda}/eyes-closed.png`,
    eyesOpen: `${character.linda}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.linda}/mouth-smile.png`,
    mouthOpen: `${character.linda}/mouth-laugh.png`
  },
  lisa: {
    base: `${character.lisa}/base.png`,
    brows: `${character.lisa}/brows-neutral.png`,
    eyesClosed: `${character.lisa}/eyes-closed.png`,
    eyesOpen: `${character.lisa}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.lisa}/mouth-smile.png`,
    mouthOpen: `${character.lisa}/mouth-laugh.png`
  },
  maria: {
    base: `${character.maria}/base.png`,
    brows: `${character.maria}/brows-normal.png`,
    eyesClosed: `${character.maria}/eyes-closed.png`,
    eyesOpen: `${character.maria}/eyes-open.png`,
    glasses: `${character.maria}/glasses.png`,
    mouthClosed: `${character.maria}/mouth-smile.png`,
    mouthOpen: `${character.maria}/mouth-laugh.png`
  },
  npcBoy: {
    base: `${character.npc}/boy-base.png`,
    brows: `${character.npc}/boy-base.png`,
    eyesClosed: `${character.npc}/boy-eyes-closed.png`,
    eyesOpen: `${character.npc}/boy-eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.npc}/boy-mouth-smile.png`,
    mouthOpen: `${character.npc}/boy-mouth-laugh.png`
  },
  npcGirl: {
    base: `${character.npc}/girl-base.png`,
    brows: `${character.npc}/girl-base.png`,
    eyesClosed: `${character.npc}/girl-eyes-closed.png`,
    eyesOpen: `${character.npc}/girl-eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.npc}/girl-mouth-smile.png`,
    mouthOpen: `${character.npc}/girl-mouth-laugh.png`
  },
  npcMan: {
    base: `${character.npc}/man-base.png`,
    brows: `${character.npc}/man-base.png`,
    eyesClosed: `${character.npc}/man-eyes-closed.png`,
    eyesOpen: `${character.npc}/man-eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.npc}/man-mouth-smile.png`,
    mouthOpen: `${character.npc}/man-mouth-laugh.png`
  },
  npcWoman: {
    base: `${character.npc}/woman-base.png`,
    brows: `${character.npc}/woman-base.png`,
    eyesClosed: `${character.npc}/woman-eyes-closed.png`,
    eyesOpen: `${character.npc}/woman-eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.npc}/woman-mouth-smile.png`,
    mouthOpen: `${character.npc}/woman-mouth-laugh.png`
  },
  sarah: {
    base: `${character.sarah}/base.png`,
    brows: `${character.sarah}/brows-normal.png`,
    eyesClosed: `${character.sarah}/eyes-closed.png`,
    eyesOpen: `${character.sarah}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.sarah}/mouth-smile.png`,
    mouthOpen: `${character.sarah}/mouth-laugh.png`
  },
  sophie: {
    base: `${character.sophie}/base.png`,
    brows: `${character.sophie}/brows-neutral.png`,
    eyesClosed: `${character.sophie}/eyes-closed.png`,
    eyesOpen: `${character.sophie}/eyes-open.png`,
    glasses: `${character.sophie}/glasses.png`,
    mouthClosed: `${character.sophie}/mouth-smile.png`,
    mouthOpen: `${character.sophie}/mouth-laugh.png`
  },
  tom: {
    base: `${character.tom}/base.png`,
    brows: `${character.tom}/brows-normal.png`,
    eyesClosed: `${character.tom}/eyes-closed.png`,
    eyesOpen: `${character.tom}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.tom}/mouth-smile.png`,
    mouthOpen: `${character.tom}/mouth-laugh.png`
  },
  // Spanish
  camila: {
    base: `${character.camila}/base.png`,
    brows: `${character.camila}/brows-neutral.png`,
    eyesClosed: `${character.camila}/eyes-closed.png`,
    eyesOpen: `${character.camila}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.camila}/mouth-smile.png`,
    mouthOpen: `${character.camila}/mouth-open.png`
  },
  elena: {
    base: `${character.elena}/base.png`,
    brows: `${character.elena}/brows-neutral.png`,
    eyesClosed: `${character.elena}/eyes-closed.png`,
    eyesOpen: `${character.elena}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.elena}/mouth-smile.png`,
    mouthOpen: `${character.elena}/mouth-open.png`
  },
  julieta: {
    base: `${character.julieta}/base.png`,
    brows: `${character.julieta}/brows-neutral.png`,
    eyesClosed: `${character.julieta}/eyes-closed.png`,
    eyesOpen: `${character.julieta}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.julieta}/mouth-smile.png`,
    mouthOpen: `${character.julieta}/mouth-open.png`
  },
  luna: {
    base: `${character.luna}/base.png`,
    brows: `${character.luna}/brows-neutral.png`,
    eyesClosed: `${character.luna}/eyes-closed.png`,
    eyesOpen: `${character.luna}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.luna}/mouth-smile.png`,
    mouthOpen: `${character.luna}/mouth-open.png`
  },
  // Chinese
  chenNa: {
    base: `${character.chenNa}/base.png`,
    brows: `${character.chenNa}/brows-neutral.png`,
    eyesClosed: `${character.chenNa}/eyes-closed.png`,
    eyesOpen: `${character.chenNa}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.chenNa}/mouth-smile.png`,
    mouthOpen: `${character.chenNa}/mouth-open.png`
  },
  liHong: {
    base: `${character.liHong}/base.png`,
    brows: `${character.liHong}/brows-neutral.png`,
    eyesClosed: `${character.liHong}/eyes-closed.png`,
    eyesOpen: `${character.liHong}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.liHong}/mouth-smile.png`,
    mouthOpen: `${character.liHong}/mouth-open.png`
  },
  liPing: {
    base: `${character.liPing}/base.png`,
    brows: `${character.liPing}/brows-neutral.png`,
    eyesClosed: `${character.liPing}/eyes-closed.png`,
    eyesOpen: `${character.liPing}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.liPing}/mouth-smile.png`,
    mouthOpen: `${character.liPing}/mouth-open.png`
  },
  linYating: {
    base: `${character.linYating}/base.png`,
    brows: `${character.linYating}/brows-neutral.png`,
    eyesClosed: `${character.linYating}/eyes-closed.png`,
    eyesOpen: `${character.linYating}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.linYating}/mouth-smile.png`,
    mouthOpen: `${character.linYating}/mouth-open.png`
  },
  liuMing: {
    base: `${character.liuMing}/base.png`,
    brows: `${character.liuMing}/brows-neutral.png`,
    eyesClosed: `${character.liuMing}/eyes-closed.png`,
    eyesOpen: `${character.liuMing}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.liuMing}/mouth-smile.png`,
    mouthOpen: `${character.liuMing}/mouth-open.png`
  },
  wangHua: {
    base: `${character.wangHua}/base.png`,
    brows: `${character.wangHua}/brows-neutral.png`,
    eyesClosed: `${character.wangHua}/eyes-closed.png`,
    eyesOpen: `${character.wangHua}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.wangHua}/mouth-smile.png`,
    mouthOpen: `${character.wangHua}/mouth-open.png`
  },
  zhangWei: {
    base: `${character.zhangWei}/base.png`,
    brows: `${character.zhangWei}/brows-neutral.png`,
    eyesClosed: `${character.zhangWei}/eyes-closed.png`,
    eyesOpen: `${character.zhangWei}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.zhangWei}/mouth-smile.png`,
    mouthOpen: `${character.zhangWei}/mouth-open.png`
  },
  zhouYongjie: {
    base: `${character.zhouYongjie}/base.png`,
    brows: `${character.zhouYongjie}/brows-neutral.png`,
    eyesClosed: `${character.zhouYongjie}/eyes-closed.png`,
    eyesOpen: `${character.zhouYongjie}/eyes-open.png`,
    glasses: null,
    mouthClosed: `${character.zhouYongjie}/mouth-smile.png`,
    mouthOpen: `${character.zhouYongjie}/mouth-open.png`
  }
};

// Add new characters here
export const characterAssets = {
  // English
  Alice: characterImages.alice,
  Amy: characterImages.npcGirl,
  Anna: characterImages.anna,
  Bob: characterImages.bob,
  Brian: characterImages.brian,
  Candidate: characterImages.npcBoy,
  David: characterImages.david,
  'Delivery Man': characterImages.npcMan,
  Expert: characterImages.npcMan,
  Jake: characterImages.jake,
  James: characterImages.james,
  Jessica: characterImages.npcWoman,
  Jim: characterImages.npcMan,
  Josh: characterImages.npcMan,
  Linda: characterImages.linda,
  Lisa: characterImages.lisa,
  Maria: characterImages.maria,
  Mark: characterImages.npcBoy,
  Riker: characterImages.npcMan,
  Sarah: characterImages.sarah,
  'Second Candidate': characterImages.npcMan,
  Sophie: characterImages.sophie,
  Tom: characterImages.tom,

  // Spanish
  Alex: characterImages.npcGirl,
  Ángela: characterImages.sarah,
  Camila: characterImages.camila,
  Carlos: characterImages.brian,
  Elena: characterImages.elena,
  Esteban: characterImages.james,
  Joaquín: characterImages.jake,
  Julieta: characterImages.julieta,
  Luis: characterImages.bob,
  Luna: characterImages.luna,
  Marisol: characterImages.linda,
  Mateo: characterImages.npcBoy,
  Noelia: characterImages.npcWoman,
  René: characterImages.npcMan,
  Sebastián: characterImages.david,
  Diego: characterImages.tom,
  Valeria: characterImages.alice,

  //Chinese
  'Chen Na': characterImages.chenNa,
  'Li Hong': characterImages.liHong,
  'Li Ping': characterImages.liPing,
  'Lin Yating': characterImages.linYating,
  'Liu Ming': characterImages.liuMing,
  'Wang Hua': characterImages.wangHua,
  'Zhang Wei': characterImages.zhangWei,
  'Zhou Yongjie': characterImages.zhouYongjie
};
