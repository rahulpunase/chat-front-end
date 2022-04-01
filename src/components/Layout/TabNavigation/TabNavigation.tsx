import React, {FC} from "react";
import styles from "./TabNavigation.module.scss";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

interface TabNavigationProps {
}

const navUl = {
	visible: {opacity: 1},
	hidden: {opacity: 0},
};

const TabNavigation: FC<TabNavigationProps> = () => {
	return <nav className={`${styles.TabNavigation} d-flex`}>
		<motion.div
			animate={{rotate: 360}}
			transition={{duration: 1}}
			className={`${styles.brandIcon} icon d-none d-lg-flex justify-content-center align-items-center theme-primary-font-color `}>
			<i className="fas fa-comment-alt"/>
		</motion.div>
		<motion.ul
			initial="hidden"
			animate="visible"
			variants={navUl}
			transition={{duration: 1}}
			className={`${styles.tabLinksGroup} d-flex navbar-nav align-items-center theme-font-color-primary-for-link`}>
			<li className={`${styles.gap} nav-item d-none d-lg-block`}/>
			<li className={`${styles.linkItem} nav-item`}>
				<NavLink to={"/tab/create-chat"}>
					<i className="fas fa-pen"/>
				</NavLink>
			</li>
			<li className={`${styles.linkItem} nav-item`}>
				<NavLink to={"/tab/friends"}>
					<i className="fas fa-user-friends"/>
				</NavLink>
			</li>
			<li className={`${styles.linkItem} nav-item`}>
				<NavLink to={"/tab/chats"}>
					<i className="fas fa-comment-alt"/>
				</NavLink>
			</li>
			<li className={`${styles.linkItem} nav-item`}>
				<NavLink to={"/tab/notification"}>
					<i className="fas fa-bell"/>
				</NavLink>
			</li>
			<li className={`${styles.linkItem} nav-item`}>
				<NavLink to={"/profile"}>
					<i className="fas fa-pen"/>
				</NavLink>
			</li>
			<li className={`${styles.gap} nav-item d-none d-lg-block`}/>
		</motion.ul>
	</nav>
};

export default TabNavigation;
