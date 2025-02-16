import React from "react";
import Item from "./Item";

interface ListingProps {
  items: {
    listing_id: number;
    url?: string;
    MainImage?: { url_570xN?: string };
    title?: string;
    price?: string;
    currency_code?: string;
    quantity?: number;
  }[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.listing_id}
          url={item.url || "#"}
          image={item.MainImage?.url_570xN || ""}
          title={item.title || "No title available"}
          price={item.price || "0.00"}
          currency={item.currency_code || "USD"}
          quantity={item.quantity || 0}
        />
      ))}
    </div>
  );
};

export default Listing;
