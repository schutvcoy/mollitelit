function getImplicitFromFilterTransform(transform) {
  return (data) => {
    return data.filter(transform);
  };
}
