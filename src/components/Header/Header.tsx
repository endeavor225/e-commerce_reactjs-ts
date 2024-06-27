import React, { FC, useEffect, Fragment } from 'react';
// import Loading from '../Loading/Loading';
import './Header.css';
import { Meta } from '../../models/meta';
import { formatPrice, getMetas } from '../../helpers/utils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthState, getCart } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import { LOGOUT, REMOVE_FROM_CART } from '../../redux/actions/actionTypes';
import { Article } from '../../models/article';



interface HeaderProps {
  metas: Meta[]
}


const Header: FC<HeaderProps> = ({ metas }) => {


  const isAuth = useSelector(getAuthState)
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState('');

  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])

  const handleLogout = (event: any) => {
    event.preventDefault()
    dispatch({
      type: LOGOUT,
      payload: null
    })
  }

  const handleRemoveCartItem = (event: any, item: Article) => {
    event.preventDefault()
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        product: item.product,
        quantity: item.quantity
      }
    })
  }

  return (
    <Fragment>
      <div className="Header">
        <header className="header_wrap fixed-top header_with_topbar active">
          <div className="top-header" >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div
                    className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <div className="me-3">
                      <div className="ddOutOfVision" id="msdrpdd20_msddHolder"
                        style={{ height: '0px', overflow: 'hidden', position: 'absolute' }}><select
                          name="countries" className="custome_select" id="msdrpdd20"
                        >
                          <option value="USD" data-title="USD" >USD</option>
                          <option value="EUR" data-title="EUR" >EUR</option>
                          <option value="GBR" data-title="GBR" >GBR</option>
                        </select></div>
                      <div className="dd ddcommon borderRadius" id="msdrpdd20_msdd" style={{ width: '52px' }}>
                        <div className="ddTitle borderRadiusTp"><span className="divider"></span><span
                          className="ddArrow arrowoff"></span><span className="ddTitleText "
                            id="msdrpdd20_title"><span className="ddlabel">USD</span><span className="description"
                              style={{ display: 'none' }}></span></span></div>
                        <input id="msdrpdd20_titleText"
                          type="text" autoComplete="off" className="text shadow borderRadius"
                          style={{ display: 'none' }} />
                        <div className="ddChild ddchild_ border shadow" id="msdrpdd20_child"
                          style={{ zIndex: 9999, display: 'none', position: 'absolute', visibility: 'visible', height: '99px' }}>
                          <ul>
                            <li className="enabled _msddli_ selected" title="USD"><span
                              className="ddlabel">USD</span>
                              <div className="clear"></div>
                            </li>
                            <li className="enabled _msddli_" title="EUR"><span className="ddlabel">EUR</span>
                              <div className="clear"></div>
                            </li>
                            <li className="enabled _msddli_" title="GBR"><span className="ddlabel">GBR</span>
                              <div className="clear"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="contact_detail text-center text-lg-start">
                      <li ><i className="ti-mobile"></i><span
                      >{getMetas(metas, "site_phone")}</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center text-md-end">
                    <ul className="header_list">
                      <li ><Link
                        ng-reflect-router-link="/compare" to="/compare"><i
                          className="ti-control-shuffle"></i><span
                          >Compare</span></Link></li>
                      <li ><Link
                        ng-reflect-router-link="/wishlist" to="/wishlist"><i
                          className="ti-heart"></i><span >Wishlist</span></Link></li>

                      {
                        isAuth ?
                          <>
                            <li ><Link to="/account"><i className="ti-user"></i><span >Account</span></Link>
                            </li>
                            <li ><a onClick={handleLogout} ><i className="ti-user"></i><span >Logout</span></a>
                            </li>
                          </>
                          :
                          <>
                            <li ><Link to="/signin"><i className="ti-user"></i><span >Signin</span></Link>
                            </li>
                            <li ><Link to="/signup" ><i className="ti-user"></i><span >Signup</span></Link>
                            </li>
                          </>
                      }

                      <li ></li>
                      <li ></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_header dark_skin main_menu_uppercase">
            <div className="container">
              <nav className="navbar navbar-expand-lg"><Link
                className="navbar-brand" ng-reflect-router-link="/" to="/">
                <h2 >{getMetas(metas, "site_name")}</h2>
              </Link><button type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-expanded="false"
                className="navbar-toggler collapsed"><span
                  className="ion-android-menu"></span></button>
                <div id="navbarSupportedContent"
                  className="navbar-collapse justify-content-end collapse" >
                  <ul className="navbar-nav">
                    <li className="dropdown"><Link
                      className="nav-link" ng-reflect-router-link="/" to="/">Home</Link></li>
                    <li className="dropdown"><Link to="#"
                      data-bs-toggle="dropdown" className="dropdown-toggle nav-link active"
                      aria-expanded="false">Pages</Link>
                      <div className="dropdown-menu">
                        <ul >
                          <li ><a
                            className="dropdown-item nav-link nav_item" ng-reflect-router-link="/about"
                            href="/about">About Us</a></li>
                          <li ><a
                            className="dropdown-item nav-link nav_item"
                            ng-reflect-router-link="/contact" href="/contact">Contact Us</a></li>
                          <li ><a
                            className="dropdown-item nav-link nav_item" ng-reflect-router-link="/fqa"
                            href="/fqa">Faq</a></li>
                          <li ><a
                            className="dropdown-item nav-link nav_item"
                            ng-reflect-router-link="/signin" href="/signin">Login</a></li>
                          <li ><a
                            className="dropdown-item nav-link nav_item"
                            ng-reflect-router-link="/signup" href="/signup">Register</a></li>
                          <li ><a
                            className="dropdown-item nav-link nav_item" ng-reflect-router-link="/terms"
                            href="/terms">Terms and Conditions</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu"><a
                      href="#" data-bs-toggle="dropdown"
                      className="dropdown-toggle nav-link" aria-expanded="false">Products</a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-3">
                            <ul >
                              <li className="dropdown-header">Robes</li>
                              <li ><a
                                className="dropdown-item nav-link nav_item"
                                ng-reflect-router-link="/,product,bikini-unicolore-cte"
                                href="/product/bikini-unicolore-ctel-shop">Bikini unicolore
                                côtelé</a><a
                                  className="dropdown-item nav-link nav_item"
                                  ng-reflect-router-link="/,product,jupe-crayon-taille-h"
                                  href="/product/jupe-crayon-taille-haute-en-dentelle">Jupe crayon
                                  taille haute en dentelle</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,jupe-imprim-floral-t"
                                    href="/product/jupe-imprim-floral-taille-fronce">Jupe à imprimé
                                  floral à taille froncée</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,robe-fines-brides-im"
                                    href="/product/robe-fines-brides-imprim-tropical-en-dentelle">Robe à
                                  fines brides à imprimé tropical en dentelle</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-3">
                            <ul >
                              <li className="dropdown-header">Jupes</li>
                              <li ><a
                                className="dropdown-item nav-link nav_item"
                                ng-reflect-router-link="/,product,bikini-unicolore-cte"
                                href="/product/bikini-unicolore-ctel-shop">Bikini unicolore
                                côtelé</a><a
                                  className="dropdown-item nav-link nav_item"
                                  ng-reflect-router-link="/,product,jupe-noire-brillante"
                                  href="/product/jupe-noire-brillante">Jupe noire brillante</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,jupe-fendue-taille-h"
                                    href="/product/jupe-fendue-taille-haute">Jupe fendue taille
                                  haute</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,jupe-imprim-floral-t"
                                    href="/product/jupe-imprim-floral-taille-fronce">Jupe à imprimé
                                  floral à taille froncée</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-3">
                            <ul >
                              <li className="dropdown-header">Culotes </li>
                              <li ><a
                                className="dropdown-item nav-link nav_item"
                                ng-reflect-router-link="/,product,bikini-unicolore-cte"
                                href="/product/bikini-unicolore-ctel-shop">Bikini unicolore
                                côtelé</a><a
                                  className="dropdown-item nav-link nav_item"
                                  ng-reflect-router-link="/,product,culotte-en-dentelle-"
                                  href="/product/culotte-en-dentelle-mudey">Culotte en dentelle</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,culotte-en-dentelle-"
                                    href="/product/culotte-en-dentelle-espero">Culotte en dentelle</a><a
                                      className="dropdown-item nav-link nav_item"
                                      ng-reflect-router-link="/,product,culotte-en-dentelle"
                                      href="/product/culotte-en-dentelle">Culotte en dentelle</a><a
                                        className="dropdown-item nav-link nav_item"
                                        ng-reflect-router-link="/,product,short-paillettes-bro"
                                        href="/product/short-paillettes-broderie-dchir">Short à paillettes à
                                  broderie déchiré</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-3">
                            <ul >
                              <li className="dropdown-header">Pantalons</li>
                              <li ><a
                                className="dropdown-item nav-link nav_item"
                                ng-reflect-router-link="/,product,pantalon-taille-haut"
                                href="/product/pantalon-taille-haute-carreaux-avec-zip">Pantalon
                                taille haute à carreaux avec zip</a><a
                                  className="dropdown-item nav-link nav_item"
                                  ng-reflect-router-link="/,product,pantalon-carreaux-av"
                                  href="/product/pantalon-carreaux-avec-cordon-la-taille">Pantalon à
                                  carreaux avec cordon à la taille</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,pantalon-taille-fron"
                                    href="/product/pantalon-taille-fronce-poches">Pantalon à taille
                                  froncée à poches</a><a
                                    className="dropdown-item nav-link nav_item"
                                    ng-reflect-router-link="/,product,pantalon-unicolore-t"
                                    href="/product/pantalon-unicolore-taille-haute">Pantalon unicolore
                                  taille haute</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="d-lg-flex menu_banners row g-3 px-3">
                          <div className="col-sm-4">
                            <div className="header-banner"><img
                              alt="menu_banner1"
                              src="/assets/files/megaCollection/11736749706614988691774027121876766721152610541684827357419.png" />
                              <div className="banne_info">
                                <h6 >10% Off</h6>
                                <h4 >New Arrival</h4><a
                                  href="http://localhost:4300/">Shop
                                  Now</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="header-banner"><img
                              alt="menu_banner1"
                              src="/assets/files/megaCollection/8932488097310286313588503554459963159142614451684826970123.png" />
                              <div className="banne_info">
                                <h6 >15% Off</h6>
                                <h4 >Men's Fashion</h4><a
                                  href="http://localhost:4300/">Shop
                                  Now</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="header-banner"><img
                              alt="menu_banner1"
                              src="/assets/files/megaCollection/1412527185807988177642011518607795945067036381684827015102.png" />
                              <div className="banne_info">
                                <h6 >23% Off</h6>
                                <h4 >Kids Fashion</h4><a
                                  href="http://localhost:4300/">Shop
                                  Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu"><a
                      className="nav-link"
                      ng-reflect-router-link="/shop-list" href="/shop-list">Shop</a></li>
                    <li ><a
                      className="nav-link nav_item" ng-reflect-router-link="/contact" href="/contact">Contact
                      Us</a></li>
                  </ul>
                </div>
                <ul className="navbar-nav attr-nav align-items-center">
                  <li ><a href="javascript:void(0);"
                    className="nav-link search_trigger"><i
                      className="linearicons-magnifier"></i></a>
                    <div className="search_wrap"><span
                      className="close-search"><i
                        className="ion-ios-close-empty"></i></span>
                      <form className="ng-untouched ng-pristine ng-valid">
                        <input type="text" placeholder="Search" id="search_input"
                          className="form-control" /><button type="submit"
                            className="search_icon"><i
                              className="ion-ios-search-strong"></i></button></form>
                    </div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                    <div className="search_overlay"></div>
                  </li>
                  {
                    cart.quantity ?
                      <li className="dropdown cart_dropdown">
                        <a href="#" data-bs-toggle="dropdown" className="nav-link cart_trigger">
                          <i className="linearicons-cart"></i>
                          <span className="cart_count">{cart.quantity}</span>
                        </a>
                        <div className="cart_box dropdown-menu dropdown-menu-right">
                          <ul className="cart_list">
                            {
                              cart.items.map(item => {
                                const { product, quantity } = item
                                return <li>
                                  <a href="#" className="item_remove" onClick={(event) => handleRemoveCartItem(event, item)}>
                                    <i className="ion-close"></i>
                                  </a>
                                  <a href="#"><img width="50" height="50" alt="cart_thumb1" src={product.imageUrls[0]} />
                                    {product.name}
                                  </a>
                                  <span className="cart_quantity"> {quantity} x
                                    <span className="cart_amount">
                                      <span className="price_symbole"> {formatPrice(product.solde_price)}</span>
                                      <span> = </span>
                                      <span className="price_symbole"> {formatPrice(item.sub_total)}</span>
                                    </span>
                                  </span>
                                </li>
                              })
                            }

                          </ul>
                          <div className="cart_footer">
                            <p className="cart_total"><strong
                            >Subtotal:</strong><span
                              className="cart_price"><span

                                className="price_symbole"></span></span>{formatPrice(cart.sub_total)}</p>
                            <p className="cart_buttons">
                              <Link className="btn btn-fill-line view-cart" to="/cart">
                                View Cart
                              </Link>
                              <Link className="btn btn-fill-out checkout" to="/checkout">
                                Checkout
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>
                      : null
                  }

                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default Header;