# Technical Principles

Every decision in the Fastify framework and its official plugins is guided by
the following technical principles:

1. “Zero” overhead in production
2. “Good” developer experience
3. Works great for small & big projects alike
4. Easy to migrate to microservices (or even serverless) and back
5. Security & data validation
6. If something could be a plugin, it likely should be
7. Easily testable
8. Do not monkeypatch core
9. Semantic versioning & Long Term Support
10. Specification adherence

## "Zero" Overhead in Production

Fastify aims to implement features with minimal overhead. This is achieved by
using fast algorithms, data structures, and JavaScript-specific features.

Since JavaScript does not offer zero-overhead data structures, this principle
can conflict with providing a great developer experience and additional features,
as these usually incur some overhead.

## "Good" Developer Experience

Fastify aims to provide the best developer experience at its performance point.
It offers a great out-of-the-box experience that is flexible enough to adapt to
various situations.

For example, binary addons are forbidden because most JavaScript developers do
not have access to a compiler.

## Works great for small and big projects alike

Most applications start small and become more complex over time. Fastify aims to
grow with this complexity, providing advanced features to structure codebases.

## Easy to migrate to microservices (or even serverless) and back

Route deployment should not matter. The framework should "just work".

## Security and Data Validation

A web framework is the first point of contact with untrusted data and must act
as the first line of defense for the system.

## If something could be a plugin, it likely should

Recognizing the infinite use cases for an HTTP framework, catering to all in a
single module would make the codebase unmaintainable. Therefore, hooks and
options are provided to customize the framework as needed.

## Easily testable

Testing Fastify applications should be a first-class concern.

## Do not monkeypatch core

Monkeypatching Node.js APIs or installing globals that alter the runtime makes
building modular applications harder and limits Fastify's use cases. Other
frameworks do this; Fastify does not.

## Semantic Versioning and Long Term Support

A clear [Long Term Support strategy is provided](./LTS.md) to inform developers
when to upgrade.

## Specification adherence

In doubt, we chose the strict behavior as defined by the relevant
Specifications.
