"use client"
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SelectionLogic from '@/Components/SelectionLogic';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function index() {
  const [products, setProducts] = useState([]);
  const [isFilterListVisible, setIsFilterListVisible] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);

  const handlefilter = () => {
    setIsFilterListVisible(!isFilterListVisible);
  }


  return (
    <div>
      <nav>
        <div className='nav-top'>
          <div className='menu-toggle'>
            <div className='menu'></div>
            <div className='menu'></div>
            <div className='menu'></div>
          </div>
          <div className='img-logo'>
            <img src='/logo.png' alt="My Image" width={100} height={70} />
          </div>
          <h2>LOGO</h2>
          <ul>
            <li><SearchIcon className='nav-icons' /></li>
            <li><FavoriteBorderIcon className='nav-icons' /></li>
            <li><ShoppingBagIcon className='nav-icons' /></li>
            <li id='person'><PersonOutlineIcon className='nav-icons' /></li>
            <li id='select'>
              <select defaultValue="ENG">
                <option value="ENG">ENG</option>
                <option value="HIN">HIN</option>
                <option value="JPN">JAP</option>
              </select>
            </li>
          </ul>
        </div>
        <div className='nav-bottom'>
          <ul>
            <li id='home'>HOME</li>
            <li id='shop'>SHOP</li>
            <li className='hid'>SKILLS</li>
            <li className='hid'>STORIES</li>
            <li className='hid'>ABOUT</li>
            <li className='hid'>CONTACT US</li>
          </ul>
        </div>
      </nav>
      <div className='body-header'>
        <div className='sub-header'>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet consectertur. Amet est posuere rhoncus scelerisque.<span>Dolor integer scelerisque nibh amet mi ut elementum dolor.</span></p>
        </div>
      </div>
      <div className='body'>
        <div className='item-nav'>
          <div className='item-nav-left'>
            <p className='items-number'>3425 ITEMS </p>
            <p className='toggle-filter' onClick={handlefilter}>
              <span>{isFilterListVisible ? '< HIDE' : '> SHOW'}</span> FILTER
            </p>
          </div>
          <select defaultValue="REC">
            <option value="REC">RECOMMENDED</option>
            <option value="NEW">NEWEST FIRST</option>
            <option value="POP">POPULAR</option>
            <option value="HTL">PRICE:HIGH TO LOW</option>
            <option value="LTH">PRICE:LOW TO HIGH</option>
          </select>
        </div>
        <div className='body-items'>
          {isFilterListVisible && (
            <div className='fiter-list'>
              <div className='custom'>
                <label>
                  <input
                    type="checkbox"
                  />
                  CUSTOMIZBLE
                </label>
              </div>
              <div>
                <SelectionLogic label="IDEAL FOR" />
                <SelectionLogic label="OCCASION" />
                <SelectionLogic label="WORK" />
                <SelectionLogic label="FABRIC" />
                <SelectionLogic label="SEGMENT" />
                <SelectionLogic label="SUITABLE FOR" />
                <SelectionLogic label="RAW MATERIALS" />
                <SelectionLogic label="PATTERN" />
              </div>
            </div>
          )}
          <div className='products'>
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className='product-item'>
                  <div className='product-image'>
                    <img src={product.image} alt={product.title} className='image' />
                  </div>
                  <div className='product-detail'>
                    <h2 className='product-title'>{product.title}</h2>
                    <p className='product-price'>Price: ${product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
      <footer>
        <div className='footer-1'>
          <div className='footer-mail'>
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from metta muse.</p>
            <div className='mail-button'>
              <input type='text' placeholder='Enter Your e-mail...' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className='footer-contact'>
            <h2>CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h2>CURRENCY</h2>
            <div className='usd-curr'>
              <img src='/image.png' alt="My Image" width={25} height={25} />
              <h4>USD</h4>
            </div>
            <p id='transaction'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
        <div className='footer-2'>
          <div className='footer2'>
            <h2>metta muse<div className='arrow'><KeyboardArrowDownIcon /></div></h2>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className='footer2'>
            <h2>QUICK LINKS<div className='arrow'><KeyboardArrowDownIcon /></div></h2>

            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className='footer2'>
            <h2 id='footer2-bottom'>FOLLOW US<div className='arrow'><KeyboardArrowDownIcon /></div></h2>
            <div className='icons'>
              <li><InstagramIcon style={{ width: '20px', height: '20px' }} /></li>
              <li><LinkedInIcon style={{ width: '20px', height: '20px' }} /></li>
            </div>
            <h2>metta muse ACCEPTS</h2>
            <div className='payments'>
              <img src='https://imgs.search.brave.com/UhTUaUrFULGPuqQZP_hZP4XEaI144BGSEV-j_3n1uEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2dvb2ds/ZS1wYXkuanBn' alt='gpay' style={{ width: '60px', height: '35px' }} />
              <img src='https://imgs.search.brave.com/B-d_gXUsA-e81mTEa-G6hIAcuug2ozI3MUuaGxgUrv4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbmti/b3RkZXNpZ24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAyL01hc3RlcmNh/cmQtbG9nby4wLTEw/MjR4NjgzLmpwZw' alt='master' style={{ width: '60px', height: '35px' }} />
              <img src='https://imgs.search.brave.com/eH4U-g1J5Ps7NyE8uWhEbJrazYcKPiDfbyr8vC-Qfu8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF5cGFsLmNvbS9p/bnZvaWNlL2ltYWdl/cy9wYXktd2l0aC1Q/YXlQYWwtbG9nby5z/dmc.svg' alt='paypal' style={{ width: '60px', height: '35px' }} />
              <img src='https://imgs.search.brave.com/ZwtKsYprW67Y0B40xcmPgV7ny02C7yojdTjL6aBJWSU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYW1leC1j/YXJkLWxvZ28tNkQz/NTJBQTBBNC1zZWVr/bG9nby5jb20ucG5n' alt='amex' style={{ width: '60px', height: '38px' }} />
              <img src='https://imgs.search.brave.com/fcVK01zfUVxi1cBGPZNDOM1MiNqH4khbmRAMfqdyYvA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ybzYxazEw/MWVlNTkvN0FxcDlM/NXpDZHZjZkxRcUs1/dVg2YS9jNmVmZWU0/M2VmZmE0NTJmOGU2/Y2JiNjMzZTc5YzMx/Ni9hcHBsZV9wYXlf/bG9nby5wbmc_dz00/MDA' alt='apple pay' style={{ width: '60px', height: '58px' }} />
              <img src='https://imgs.search.brave.com/Au3_eleC8Ej2oeQYBD3RgMWIt4wuHE16loM68RzHuOg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saXF1/aWRkZXNpZ25zLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA1LzAzLVBheXRt/TG9nby5qcGc' alt='paytm' style={{ width: '60px', height: '35px' }} />
            </div>
          </div>
        </div>
        <div className='footer-3'>
          <p>copyright &copy; 2024 mettamuse. All right reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default index
