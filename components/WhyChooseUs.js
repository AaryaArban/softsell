import { FaLock, FaRocket, FaStar, FaUsers } from 'react-icons/fa';

export default function WhyChooseUs() {
  const points = [
    { icon: <FaRocket />, title: 'Fast Payouts' },
    { icon: <FaStar />, title: 'Top Rated' },
    { icon: <FaLock />, title: 'Secure & Legal' },
    { icon: <FaUsers />, title: '1,000+ Customers' },
  ];

  return (
    <section className="bg-light p-5 text-center">
      <h3>Why Choose Us</h3>
      <div className="row mt-4">
        {points.map((p, i) => (
          <div className="col-md-3" key={i}>
            <div className="p-3">
              <div className="display-4 text-primary">{p.icon}</div>
              <h6 className="mt-2">{p.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
