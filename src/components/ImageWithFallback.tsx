import { useState } from 'react'

const FALLBACK = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80'

export default function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(FALLBACK)}
    />
  )
}
