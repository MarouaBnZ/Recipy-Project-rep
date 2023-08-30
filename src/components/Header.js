import React from "react";
import styles from "./Header.module.scss";
import recette from "../assets/images/recetteTr.png";

function Header() {
  return (
    <header
      className={`  ${styles.header} d-flex flex-row align-items-center  `}
    >
      <i class="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={recette} alt="logo-recette" />
      </div>
      <ul className="p-5">
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-solid fa-basket-shopping mr-5"></i>
          <span>Panier</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
    </header>
  );
}

export default Header;
