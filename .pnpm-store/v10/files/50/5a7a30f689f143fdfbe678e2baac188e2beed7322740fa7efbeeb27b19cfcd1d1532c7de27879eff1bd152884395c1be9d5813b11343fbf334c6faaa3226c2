import * as semver from 'semver';
interface SemverVersionConstraint {
    readonly range: string;
    readonly options?: Parameters<typeof semver.satisfies>[2];
}
type AtLeastVersionConstraint = `${number}` | `${number}.${number}` | `${number}.${number}.${number}` | `${number}.${number}.${number}-${string}`;
type VersionConstraint = SemverVersionConstraint | AtLeastVersionConstraint;
interface DependencyConstraint {
    /**
     * Passing a string for the value is shorthand for a '>=' constraint
     */
    readonly [packageName: string]: VersionConstraint;
}
declare function satisfiesAllDependencyConstraints(dependencyConstraints: DependencyConstraint | undefined): boolean;
export { satisfiesAllDependencyConstraints };
export type { DependencyConstraint };
//# sourceMappingURL=dependencyConstraints.d.ts.map