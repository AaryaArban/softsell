export default function Testimonials() {
    const reviews = [
      { name: 'Jayden DeSouza', role: 'IT Manager', company: 'TechCorp', review: 'SoftSell is a game-changer!' },
      { name: 'Pankaj Joshi', role: 'CFO', company: 'FinPlus', review: 'We recovered thousands from unused tools.' },
    ];
  
    return (
      <section className="text-center p-5">
        <h3>What Our Clients Say</h3>
        <div className="row mt-4">
          {reviews.map((r, i) => (
            <div className="col-md-6" key={i}>
              <blockquote className="blockquote">
                <p className="mb-0">“{r.review}”</p>
                <footer className="blockquote-footer mt-2">
                  {r.name}, {r.role} at {r.company}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    );
  }
  