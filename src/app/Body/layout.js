import ContentMenu from "../ContentMenu"
import Intro from "../Intro"
import Header from "../components/Header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <Header/>
      <Intro/>
      <ContentMenu/>
      <div>{children}</div>
    </html>
  )
}
