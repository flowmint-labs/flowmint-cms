// components/ErrorBoundary.js
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <p>Something went wrong. Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}