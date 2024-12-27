import type {Config} from 'release-it';

export default {
    git: {
        commit: true,
        commitArgs: ['-S'],
        tag: true,
        push: true,
    },
    github: {
        release: true,
    },
    npm: {
        publish: true,
        publishPath: 'dist'
    },
    hooks: {
        'before:init': 'bun run test --run',
    },
} satisfies Config;
