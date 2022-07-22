// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";
import img09 from "../all-images/cars-img/buggati.png";
import img10 from "../all-images/cars-img/lamborghini.png";
import img11 from "../all-images/cars-img/Mercedes-X5.png";
import img12 from "../all-images/cars-img/Audi-A6.png";
import img13 from "../all-images/cars-img/audi-A7.png";


const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 650,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 700,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 450,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 850,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 9,
    brand: "Buggati",
    rating: 52,
    carName: "Buggati CLE",
    imgUrl: img09,
    model: "Model 2022",
    price: 900,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },{
    id: 10,
    brand: "Lamborghini",
    rating: 52,
    carName: "Lamborghini sport",
    imgUrl: img10,
    model: "Model 2021",
    price: 1000,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },{
    id: 11,
    brand: "Mercedes",
    rating: 52,
    carName: "Mercedes X5",
    imgUrl: img11,
    model: "Model 2019",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },{
    id: 12,
    brand: "Audi",
    rating: 52,
    carName: "Audi A6 2020",
    imgUrl: img12,
    model: "Model 2020",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },{
    id: 13,
    brand: "Audi",
    rating: 52,
    carName: "Audi A7 2021",
    imgUrl: img13,
    model: "Model 2021",
    price: 500,
    speed: "300KM/H",
    gps: "GPS Navigation",
    seatType: "Sièges chauffants",
    Automatique: "Automatique",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
