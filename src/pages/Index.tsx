import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import AboutSection from '@/components/home/AboutSection';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedPosts />
      <AboutSection />
      <Newsletter />
    </Layout>
  );
};

export default Index;
