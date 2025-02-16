import React from "react";

interface ItemProps {
  url: string;
  image?: string;
  title?: string;
  price: string;
  currency: string;
  quantity: number;
}

const Item: React.FC<ItemProps> = ({ url, image, title, price, currency, quantity }) => {
  // Проверяем, есть ли заголовок
  const shortTitle = title ? (title.length > 50 ? title.substring(0, 50) + "…" : title) : "No title available";

  // Проверяем, есть ли изображение
  const imageUrl = image || "https://via.placeholder.com/150";

  // Форматируем цену в зависимости от валюты
  const formatPrice = () => {
    switch (currency) {
      case "USD":
        return `$${price}`;
      case "EUR":
        return `€${price}`;
      default:
        return `${price} ${currency}`;
    }
  };

  // Определяем класс для количества товара
  const quantityClass =
    quantity <= 10 ? "level-low" : quantity <= 20 ? "level-medium" : "level-high";

  return (
    <div className="item">
      <div className="item-image">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title || "No title"} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{formatPrice()}</p>
        <p className={`item-quantity ${quantityClass}`}>{quantity} left</p>
      </div>
    </div>
  );
};

export default Item;
