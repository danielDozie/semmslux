import {useShopQuery, flattenConnection, Link} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import BenefitSection from './BenefitSection.server.jsx';
import HeroSection from './HeroSection.server.jsx';
import FeaturedProducts from './FeaturedProducts.server.jsx';
import ParallaxSection  from './ParallaxSection.server.jsx';
import HighlightSection  from './HighlightSection.server.jsx';

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  const {data} = useShopQuery({query: QUERY});
  const shopName = data ? data.shop.name : '';
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);
  
  const firstProduct = products && products.length ? products[0].handle : '';
  const totalProducts = products && products.length;
  const firstCollection = collections[0] ? collections[0].handle : '';
  const totalCollections = collections && collections.length;
  
  return (
    <>
      <HeroSection/>
      <BenefitSection/>
      <FeaturedProducts />
      <ParallaxSection/>  
      <HighlightSection/>
    </>
  );
}

const QUERY = gql`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
