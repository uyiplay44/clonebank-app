import { Body } from '../Components/Body';
import { Content } from '../Components/Content';
import { Navbar } from '../Components/Navbar';
import AOS from 'aos';
import { Article } from '../Components/Article';
import { Footer } from '../Components/Footer';


export const Home = () => {
  AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
  });

  return (
    <div>
      <Navbar  />
      <Body />
      <Content />
      <Article />
      <Footer />
    </div>
  )
}
