import css from './MyButton.module.css';

function MyButton(props) {
  // console.log('css ===', css);
  return <button className={`${css.btn} ${props.className}`}>{props.children}</button>;
}

export default MyButton;
