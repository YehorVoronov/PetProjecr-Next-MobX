
import styles from './DropdownMenu.module.css';

export default function DropdownMenu() {
   
  return (
  <div>
{/* <button className='m-1 mr-auto bg-green-100'>menu</button> */}
<div className={styles.dropdown}>
      <button className={styles.dropbtn}>Dropdown</button>
      <div className={styles.dropdownContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
    </div>
  )
}
