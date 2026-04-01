import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Custom Beds | Bespoke Luxury Bedding & Furniture",
  description = "Exquisite custom sleep solutions. Bespoke mattresses, headboards, and bases handcrafted in London for the ultimate sanctuary.",
  canonical = "https://ais-pre-wur55bydyivnzlcfihylb7-161884020965.asia-southeast1.run.app/",
  ogType = "website",
  ogImage = "https://ais-pre-wur55bydyivnzlcfihylb7-161884020965.asia-southeast1.run.app/images/headerimghomepagebedroomsetup.jpg",
  jsonLd
}) => {
  const siteTitle = title.includes("Custom Beds") ? title : `${title} | Custom Beds`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Custom Beds",
    "image": ogImage,
    "description": description,
    "url": canonical,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "priceRange": "$$$"
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
