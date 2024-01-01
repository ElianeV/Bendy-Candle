function Feature({}) {
  const features = [
    {
      name: "make it your own",
      description:
        "Pick your favourite exercises and adjust the intensity however you like",
    },
    {
      name: "follow with ease",
      description: "something something",
    },
    {
      name: "stay on track",
      description: "something something",
    },
  ];
  return features.map(feature => (
    <div className="feature">
      <h2>{feature.name}</h2>
      <p>{feature.description}</p>
    </div>
  ));
}

export default Feature;
