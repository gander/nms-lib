import type {Config} from 'release-it';

export default {
    git: {
        commit: true,
        tag: true,
        push: true,
        pushArgs: ['-S'],
    },
    github: {
        release: true,
    },
    npm: {
        publish: true,
    },
    hooks: {
        'before:init': 'bun run test --run',
    },
} satisfies Config;
