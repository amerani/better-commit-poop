module.exports = function({ commit, branch }) {
    const { message } = commit;
    commit.message = `${message} :poop:`;
    return commit;
}