import css from "./Card.module.css";

export default function Card() {
  return (
    <div className={css["card-container"]}>
      <div className={css["post-img"]}></div>
      <div className={css["content-container"]}>
        <span className={`${css.tag} text-sm-bold`}>Learning</span>
        <p className={"text-sm"}>Published 21 Dec 2023</p>
        <a className={`${css.name} text-lg`} href="index.html">HTML & CSS foundations</a>
        <p className={`${css["post-description"]} text-md`}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className={css["author-box"]}>
        <div className={css["author-img"]}></div>
        <p className={"text-md-bold"}>Greg Hooper</p>
      </div>
    </div>
  );
}
