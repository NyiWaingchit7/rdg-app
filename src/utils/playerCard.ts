interface Player {
  id: number;
  name: string;
  city: string;
  shirtNumber: number;
  joinDate: string;
  birthDate: string;
  img: string;
}
interface Head {
  id: number;
  name: string;
  role: string;
  joinDate: string;

  img: string;
}
export const players: Player[] = [
  {
    id: 1,
    name: "Nyi Nyi Htet",
    city: "Yangon",
    shirtNumber: 1,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/nyiNyiHtet.png",
  },
  {
    id: 2,
    name: "Htet Wai Lin",
    city: "Yangon",
    shirtNumber: 5,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/htetWaiLin.png",
  },
  {
    id: 3,
    name: "Lynn ltt",
    city: "Yangon",
    shirtNumber: 34,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/nyiNyiHtet.png",
  },
  {
    id: 4,
    name: "Sai Htet Aung",
    city: "Yangon",
    shirtNumber: 13,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/saiHtetAung.png",
  },
  {
    id: 5,
    name: "Han Htoo Zaw ",
    city: "Yangon",
    shirtNumber: 23,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/hanHtooZaw.png",
  },
  {
    id: 6,
    name: "Thet Wai",
    city: "Yangon",
    shirtNumber: 6,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/thetWai.png",
  },
  {
    id: 7,
    name: "Ar Koe Yar",
    city: "Yangon",
    shirtNumber: 8,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/arKoeYar.png",
  },
  {
    id: 8,
    name: "Aung Thet Khaing Htwe",
    city: "Yangon",
    shirtNumber: 35,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/aungThetKhaingHtwe.png",
  },
  {
    id: 9,
    name: "Kyaw Thant Sin",
    city: "Yangon",
    shirtNumber: 24,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/kyawThantSin.png",
  },
  {
    id: 10,
    name: "Yell Yint ",
    city: "Yangon",
    shirtNumber: 14,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/yellYint.png",
  },
  {
    id: 11,
    name: "Htin Kyaw Lynn",
    city: "Yangon",
    shirtNumber: 16,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/htinKyawLynn.png",
  },
  {
    id: 12,
    name: "Chan Myae Aung ",
    city: "Yangon",
    shirtNumber: 11,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/chanMyaeAung.png",
  },
  {
    id: 13,
    name: "Ri Ro",
    city: "Yangon",
    shirtNumber: 10,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/riRo.png",
  },
  {
    id: 14,
    name: "Hein Htet Aung",
    city: "Yangon",
    shirtNumber: 18,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/heinHtetAung.png",
  },
  {
    id: 15,
    name: "Min Thu Linn",
    city: "Yangon",
    shirtNumber: 20,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/minThuLin.png",
  },
  {
    id: 16,
    name: "Yair Min Htun",
    city: "Yangon",
    shirtNumber: 12,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/yairMinHtun.png",
  },
  {
    id: 17,
    name: "Htet Ag Hlaing",
    city: "Yangon",
    shirtNumber: 29,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/htetAgHlaing.png",
  },
  {
    id: 18,
    name: "Kyaw Zay Khant",
    city: "Yangon",
    shirtNumber: 27,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/kyawZayKhant.png",
  },
  {
    id: 19,
    name: "Nay Nile Nile",
    city: "Yangon",
    shirtNumber: 22,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/nayNile.png",
  },
  {
    id: 20,
    name: "Owen",
    city: "Yangon",
    shirtNumber: 16,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/owen.png",
  },
  {
    id: 21,
    name: "Than Sin Win",
    city: "Yangon",
    shirtNumber: 28,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/thanSinWin.png",
  },
  {
    id: 22,
    name: "Htut Kaung Myat",
    city: "Yangon",
    shirtNumber: 2,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/htutKaungMyat.png",
  },
  {
    id: 23,
    name: "Bhone Z",
    city: "Yangon",
    shirtNumber: 36,
    joinDate: "2022",
    birthDate: "1-1-1999",
    img: "img/bhoneZ.png",
  },
];
export const head: Head[] = [
  {
    id: 1,
    name: "Aung Kaung Myat",
    role: "Manger/Coach",
    joinDate: "2022",
    img: "",
  },
  {
    id: 2,
    name: "Yair yint Thwe",
    role: "Founder",
    joinDate: "2021",
    img: "",
  },
  {
    id: 3,
    name: "Nyi Nyi Htet",
    role: "Co-founder/Captain",
    joinDate: "2021",
    img: "",
  },
  {
    id: 4,
    name: "Han Htoo Zaw",
    role: "Vice Captain",
    joinDate: "2022",
    img: "",
  },
];
export const bgimg = "img/bgpic.webp";
