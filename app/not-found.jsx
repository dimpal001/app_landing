// app/not-found.tsx
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
export default function NotFound() {
  return (
    <div>
      <Navbar />

      <div className='text-center p-8 py-52'>
        <h1 className='text-2xl font-bold'>Page Not Found</h1>
        <p className='text-gray-600'>
          The page you are looking for does not exist.
        </p>
      </div>

      <Footer />
    </div>
  )
}
