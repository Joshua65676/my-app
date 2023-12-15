import Link  from 'next/link';
import logo from "../src/app/images/urobach-logo.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";

export default function Footer() {
    return (
        <Footer>
          <main class="">
            <div class="">
              <Link href='/'> 
                <Image class="w-28 p-50 pt-3 pb-10 ml-5" src={logo} alt="logo" />
              </Link>
            </div>
            <div>
              <div>
                 <div>
                  <h3>About Us</h3>
                 </div>
                 <div>
                  <p></p>
                 </div>
              </div>
              <div>
                 <div>
                  <h3>Quick Links</h3>
                 </div>
                 <div>
                  <Link href=""><span>Home</span></Link>
                  <Link href=""><span>About</span></Link>
                  <Link href=""><span>Services</span></Link>
                  <Link href=""><span>Projects</span></Link>
                  <Link href=""><span>Clients</span></Link>
                  <Link href=""><span>Contact</span></Link>
                 </div>
              </div>
              <div>
                <div>
                  <h3>Business</h3>
                </div>
                <div>
                  <Link href=""><span>Corporate SR</span></Link>
                  <Link href=""><span>Media Kit</span></Link>
                  <Link href=""><span>Policies</span></Link>
                  <Link href=""><span>Employee Wellfare</span></Link>
                  <Link href=""><span>Careers</span></Link>
                  <Link href=""><span>Blog</span></Link>
                </div>
              </div>
              <div>
                 <div>
                  <h3>Connect</h3>
                 </div>
                 <div>
                  <p>123 456 7890 <br/> urobach@gmail.com <br/> 123, ifite-awka, Anambra, <br/> Nigeria</p>
                 </div>
                <div>
                  <Link href=""><span><FaLinkedin /></span></Link>
                  <Link href=""><span><FaSquareXTwitter /></span></Link>
                  <Link href=""><span><AiFillGoogleSquare /></span></Link>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div><span>Copyright &0169; 2023 Architecture Firm</span></div>
              <div><span>Powered by Architecture Firm</span></div>
            </div>
          </main>
        </Footer> 
    )
  }