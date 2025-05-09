import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    { icon: <FaUpload />, title: 'Upload License' },
    { icon: <FaDollarSign />, title: 'Get Valuation' },
    { icon: <FaCheckCircle />, title: 'Get Paid' },
  ];

  return (
    <section className="text-center p-5">
      <h3>How It Works</h3>
      <div className="row mt-4">
        {steps.map((s, i) => (
          <div className="col-md-4" key={i}>
            <div className="p-3">
              <div className="display-4 text-primary">{s.icon}</div>
              <h5 className="mt-2">{s.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
