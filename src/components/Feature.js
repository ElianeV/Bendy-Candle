function Feature({}) {
  const features = [
    {
      name: "make it your own",
      description:
        "Pick your favourite exercises and adjust the intensity however you like",
    },
    {
      name: "follow with ease",
      description:
        "Pick your favourite exercises and adjust the intensity however you like",
    },
    {
      name: "stay on track",
      description:
        "Pick your favourite exercises and adjust the intensity however you like",
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
