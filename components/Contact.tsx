import React, { useState } from 'react';
import { CONTACT_CONTENT } from '../constants';

const Contact: React.FC = () => {
  const { title, intro, address, email, phone, form } = CONTACT_CONTENT;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    
    // Simulate API call
    setTimeout(() => {
      // Simulate a successful submission
      setIsLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status message after a few seconds
      setTimeout(() => setStatus('idle'), 5000);

      // To test error state, uncomment below and comment out success block
      // setIsLoading(false);
      // setStatus('error');
      // setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7] scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#004d40]">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          {intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg shadow-md text-left space-y-6">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-[#004d40] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                        <h4 className="font-semibold">{address.title}</h4>
                        {address.lines.map(line => (
                            <p key={line} className="text-gray-600">{line}</p>
                        ))}
                    </div>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-[#004d40] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     <div>
                        <h4 className="font-semibold">{email.title}</h4>
                        <a href={`mailto:${email.address}`} className="text-gray-600 hover:text-[#004d40] break-all">{email.address}</a>
                    </div>
                </div>
                 <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-[#004d40] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                        <h4 className="font-semibold">{phone.title}</h4>
                        <a href={`tel:${phone.number.replace(/\s/g, '')}`} className="text-gray-600 hover:text-[#004d40]">{phone.number}</a>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{form.title}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={form.namePlaceholder} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004d40] focus:border-[#004d40]" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={form.emailPlaceholder} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004d40] focus:border-[#004d40]" />
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={form.subjectPlaceholder} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004d40] focus:border-[#004d40]" />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder={form.messagePlaceholder} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004d40] focus:border-[#004d40]"></textarea>
                    <div className="text-center">
                        <button type="submit" disabled={isLoading} className="w-full bg-[#004d40] text-white font-bold py-3 px-6 rounded-md hover:bg-[#00382e] transition-colors duration-300 disabled:bg-gray-400">
                            {isLoading ? form.sending : form.submitButton}
                        </button>
                    </div>
                    {status === 'success' && <p className="text-green-600 text-center mt-4">{form.success}</p>}
                    {status === 'error' && <p className="text-red-600 text-center mt-4">{form.error}</p>}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;