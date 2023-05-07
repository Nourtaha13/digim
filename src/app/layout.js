import './styles.css'

export const metadata = {
  title: 'DIGIM',
  description: 'description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
