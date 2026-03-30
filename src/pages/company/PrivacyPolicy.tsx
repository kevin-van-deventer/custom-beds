import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-serif mb-12">Privacy Policy</h1>
        
        <div className="prose prose-sm text-ink/70 space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">1. Introduction</h2>
            <p>
              At Custom Beds, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include your name, email address, shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to process your orders, communicate with you about your purchases, and improve our services. We may also use your information to send you marketing communications if you have opted in to receive them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also object to the processing of your personal information or request that we restrict the processing of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-ink mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@custombeds.com.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
