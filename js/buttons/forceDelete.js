$.fn.dataTable.ext.buttons.forceDelete = {
    extend: 'selected',
    className: 'buttons-duplicate btn-danger',
    text: '<i class="fa fa-trash"></i> Force Delete',
    action: function (e, dt, node, config) {
        dt.editor()
            .remove(dt.rows({selected: true}).indexes(), {
                title: 'Force Delete Record(/s)',
                message: function (e, dt) {
                    let rows = dt.rows(e.modifier()).data().pluck('DT_RowId');
                    return 'Are you sure you want to force delete the ' +
                        'following record(s)? <ul><li>' + rows.join('</li><li>') + '</li></ul>';
                },
                buttons: [
                    {
                        text: '<i class="fa fa-trash"></i> Delete',
                        className: 'btn btn-danger btn-editor-remove',
                        action: function () {
                            this.submit(null, null, function(data) {
                                data.action = 'forceDelete';
                            });
                        }
                    },
                    {
                        text: 'Cancel', className: 'btn btn-secondary ml-2', action: function () {
                            this.close();
                        }
                    }
                ]
            });
    }
};
