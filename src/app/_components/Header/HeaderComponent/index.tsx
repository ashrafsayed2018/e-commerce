"use client"
import Link from "next/link"
import { Header } from "../../../../payload/payload-types"
import { Gutter } from "../../Gutter"
import Image from "next/image"

import classes from "./index.module.scss"
import { HeaderNav } from "../Nav"
import { usePathname } from "next/navigation"
import { noHeaderFooterUrls } from "../../../constants"
function HeaderComponent({header}:{header:Header}) {
  const pathname = usePathname();
 
  return (
    <nav className={[classes.header,noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(" ")}>
        <Gutter className={classes.wrap}>
            <Link href={"/"}>
                <Image 
                src="./logo-black.svg" 
                width={170}
                height={50}
                alt="logo" />
            </Link>
            <HeaderNav header={header}/>

        </Gutter>
    </nav>
  )
}

export default HeaderComponent