function Feature({}) {
  const features = [
    {
      name: "make it your own",
      description:
        "Pick your favourite exercises and adjust the intensity however you like",
    },
    {
      name: "follow with ease",
      description: "Let youself be guided by the app's audio and visual cues",
    },
    {
      name: "always stay on track",
      description: "Save your favourite stretching plans and practice anywhere",
    },
  ];
  return features.map(feature => (
    <div className="feature">
      <h2 className="feature-name">{feature.name}</h2>
      <p>{feature.description}</p>
    </div>
  ));
}

export default Feature;
