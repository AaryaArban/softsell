import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, company, type } = form;
    if (!name || !email || !company || !type) return setError('Please fill all required fields.');
    alert('Form submitted!');
    setError('');
  };

  return (
    <section className="p-5 bg-light">
      <h3 className="text-center mb-4">Get In Touch</h3>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name*" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email*" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Company*" value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })} />
        </div>
        <div className="mb-3">
          <select className="form-control" value={form.type}
            onChange={e => setForm({ ...form, type: e.target.value })}>
            <option value="">Select License Type*</option>
            <option value="Office">MS Office</option>
            <option value="Adobe">Adobe</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Message"
            onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}
