```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly adds count as a dependency, preventing the infinite loop
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```