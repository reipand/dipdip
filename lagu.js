import * as time from 'time';
import { playsound } from 'playsound';
import { Thread } from 'threading';
import * as os from 'os';
var t1, t2;
os.system("cls");

function play() {
  playsound("penjaga-hati.wav");
}

function lyric1() {
  console.log("Playing : Penjaga Hati by nadhif basalamah");
  time.sleep(3);
  console.log("Karena");
  time.sleep(1);
  console.log("bersamamu");
  time.sleep(1);
  console.log("semua");
  time.sleep(1.5);
  console.log("terasa");
  time.sleep(1);
  console.log("indah");
  time.sleep(2);
  os.system("cls");
  console.log("Playing : Penjaga Hati by nadhif basalamah");
  console.log("gundah");
  time.sleep(0.9);
  console.log("gulana");
  time.sleep(1);
  console.log("hatiku");
  time.sleep(1);
  console.log("telah");
  time.sleep(0.8);
  console.log("hancur");
  time.sleep(0.7);
  console.log("sirna");
  time.sleep(1.5);
  os.system("cls");
  console.log("Playing : Penjaga Hati by nadhif basalamah");
  console.log("janjiku");
  time.sleep(1);
  console.log("takkan");
  time.sleep(0.9);
  console.log("kulepas");
  time.sleep(1.2);
  console.log("wahai");
  time.sleep(0.7);
  console.log("kau");
  time.sleep(0.7);
  console.log("bidadariku");
  time.sleep(1.5);
  console.log("dari");
  time.sleep(1);
  console.log("surga");
  time.sleep(1);
  os.system("cls");
  console.log("Playing : Penjaga Hati by nadhif basalamah");
  console.log("tuk");
  time.sleep(1);
  console.log("selamanya");
  time.sleep(3.5);
  os.system("cls");
  time.sleep(1);
  console.log("Playing : Penjaga Hati by nadhif basalamah");
  time.sleep(0.3);
  console.log("tuk");
  time.sleep(2.2);
  console.log("selamanya");
}

t1 = new Thread({
  "target": play
});
t1.start();
t2 = new Thread({
  "target": lyric1
});
t2.start();
