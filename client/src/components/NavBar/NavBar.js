// // ?nav bar will have contact us
// // my account that include log in and register and log out
// // cart dropdown 
// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, SwipeableDrawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import SearchIcon from '@material-ui/icons/Search';
// import PublicIcon from '@material-ui/icons/Public';
// import FlashOnIcon from '@material-ui/icons/FlashOn';
// import MenuIcon from '@material-ui/icons/Menu';
// // import { useAuth0 } from "@auth0/auth0-react";

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
//   navText: {
//     color: 'black',
//   },
// });
// function ListItemLink(props) {
//   return <ListItem />;
// }

// function Navbar() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     left: false
//   });


//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div id="drawer"
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, true)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <div>
//         <List>
//           <ListItemLink className={classes.navText} button key={'Profile'} href="/profile">
//             <ListItemIcon>
//               <AccountCircleIcon />
//             </ListItemIcon>
//             <ListItemText primary={'Profile'} />
//           </ListItemLink>

//           <ListItemLink className={classes.navText} button key={'Explore'} href="/explore">
//             <ListItemIcon>
//               <PublicIcon />
//             </ListItemIcon>
//             <ListItemText primary={'Explore'} />
//           </ListItemLink>


//           <ListItemLink className={classes.navText} button key={'Search Books'} href="/search" >
//             <ListItemIcon>
//               <SearchIcon />
//             </ListItemIcon>
//             <ListItemText primary={'Search Books'} />
//           </ListItemLink>

//           <ListItemLink className={classes.navText} button key={'Challenges'} href="/challenges">
//             <ListItemIcon>
//               <FlashOnIcon />
//             </ListItemIcon>

//             <ListItemText primary={'Challenges'} />
//           </ListItemLink>
//         </List>
//         <Divider />
//         <List>
//           <ListItemLink onClick={() => logout()}>
//             <ListItem button key="Signout" >
//               <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
//               <ListItemText primary="Signout" />
//             </ListItem>
//           </ListItemLink>

//           {/* {['Signout'].map((text) => (
// 						<ListItemLink onClick={() => logout()}>
// 							<ListItem button key={text} >
// 								<ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
// 								<ListItemText primary={text} />
// 							</ListItem>
// 						</ListItemLink>
// 					))} */}
//         </List>
//       </div>
//     </div>
//   );
//   return (
//     <div className="nav">
//       <React.Fragment key={"anchor"}>
//         <Button onClick={toggleDrawer("anchor", true)}><ListItemIcon><MenuIcon /></ListItemIcon></Button>
//         <SwipeableDrawer
//           anchor={"left"}
//           open={state["anchor"]}
//           onClose={toggleDrawer("anchor", false)}
//           onOpen={toggleDrawer("anchor", true)}
//         >
//           {list("anchor")}
//         </SwipeableDrawer>
//       </React.Fragment>
//     </div>
//   );
// }

// export default Navbar;

// import React from "react";

// import "./index.css";

// function NavBar() {
//     return (
//         <>

//             <nav className="brand navbar-brand navBar container-fluid d-none d-md-inline">
//                 <ul className="d-flex justify-content-center">
//                     <li className="navItem">
//                         <a className="navLink" aria-current="page" href="/">Home</a>
//                     </li>
//                     <li className="navItem dropdown">
//                         <a className="navItem dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                             <li><a className="dropItem" href="/shop/cakes">Cakes</a></li>
//                             <li><a className="dropItem" href="/shop/cookies">Cookies</a></li>
//                             <li><a className="dropItem" href="/shop/special_treats">Pastries</a></li>
//                         </ul>
//                     </li>
//                     <li className="navItem">
//                         <a className="navLink" href="/gallery">Gallery</a>
//                     </li>
//                     <li className="navItem">
//                         <a className="navLink" href="/about">About</a>
//                     </li>
//                     <li className="navItem">
//                         <a className="navLink" href="/contact">Contact</a>
//                     </li>
//                 </ul>
//             </nav >

//             <div className="brand navbar-brand navBar container-fluid d-md-none">
//                 <div className="d-flex justify-content-end col-12">
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <i className="fas fa-bars"></i>

//                     </button>
//                 </div>
//                 <div className="d-flex justify-content-end col-12">
//                     <div id="inBlock navbarToggleExternalContent" className="collapse">
//                         <ul id="inBlock" className="">
//                             <li className="navItem">
//                                 <a className="navLink" aria-current="page" href="/">Home</a>
//                             </li>
//                             <li id="shop" className="navItem dropdown">
//                                 <a className="navItem dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                     <li><a className="dropItem" href="/shop/cakes">Cakes</a></li>
//                                     <li><a className="dropItem" href="/shop/cookies">Cookies</a></li>
//                                     <li><a className="dropItem" href="/shop/special_treats">Special Treats</a></li>
//                                 </ul>
//                             </li>
//                             <li className="navItem">
//                                 <a className="navLink" href="/gallery">Gallery</a>
//                             </li>
//                             <li className="navItem">
//                                 <a className="navLink" href="/about">About</a>
//                             </li>
//                             <li className="navItem">
//                                 <a className="navLink" href="/contact">Contact</a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default NavBar;