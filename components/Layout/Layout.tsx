import { Children } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
// import styles from './layout.module.css';
const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
