import React from "react";

import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="title">О нас</h1>
      <p className="description">
        Мы начинающий стартап, создаем аналог корейского приложения, связанного с декором и мебелью. В Корее он является единорогом, таких приложений в СНГ нет.
      </p>
      <p className="description">
        В январе мы зарегистрировались в AstanaHub и создали прототип платформы. Сейчас мы набираем команду для создания действующего сайта и привлечения инвестиций.
      </p>
      <h2 className="sub-title">Цели</h2>
      <p className="description">
        Наша цель - стать ведущей платформой в области декора и мебели в СНГ, предоставляя уникальные возможности для пользователей и бизнеса.
      </p>
      <h2 className="sub-title">Наша команда</h2>
      <p className="description">
        Мы - молодая и амбициозная команда, состоящая из специалистов по разработке, дизайну, маркетингу и управлению продуктом.
      </p>
      <ul className="team-list">
        <li>Liya - HR</li>
        <li>Кайрат Нуртас - CEO</li>
      </ul>
    </div>
  );
}

export default About;
