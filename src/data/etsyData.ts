import rawData from "./etsy.json";

// Преобразуем JSON в массив объектов
export const etsyData = JSON.parse(JSON.stringify(rawData));