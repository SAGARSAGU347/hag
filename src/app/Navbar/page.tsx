import Image from "next/image"
import Logo from './Frame 3.png'
import Menu from "./Menu";
import styles from './Navbar.module.css';
import Contactbtn from "./Contactbtn";

function Navbar(){
  return (
    <div className="my-14">
        <nav className={`${styles.container} flex justify-between`}>
            <div>
                <Image src={Logo} alt="Logo"/>
            </div>
            <div className="flex my-2 space-x-10">
                <Menu value="What we do"/>
                <Menu value="zytrix" dropdown={false}/>
                <Menu value="Resources"/>
                <Menu value="Company"/>
            </div>
            <div className="my-2">
                <Contactbtn/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar