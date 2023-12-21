import './Statistics.css';

const Statistics = ({ title, stats }) => {
  function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + 0.5 + ')';

    return color;
  }

  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map(item => (
            <li
              className="item"
              key={item.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
