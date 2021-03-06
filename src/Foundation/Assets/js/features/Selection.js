﻿class Selection {
    Init() {
        this.Expand();
        this.Collapse();
        this.ItemClick();
    }

    Expand() {
        var selections = $('.selection--cm');
        selections.each(function (i, e) {
            $(e).find('.selection--cm__expand').each(function (j, s) {
                $(s).click(function () {
                    $(this).addClass('hidden');
                    $(this).siblings('.selection--cm__collapse').removeClass('hidden');
                    $(this).siblings('.selection--cm__dropdown').slideToggle('hidden');
                });
            });
        });
    }

    Collapse() {
        var selections = $('.selection--cm');
        selections.each(function (i, e) {
            $(e).find('.selection--cm__collapse').each(function (j, s) {
                $(s).click(function () {
                    $(this).addClass('hidden');
                    $(this).siblings('.selection--cm__expand').removeClass('hidden');
                    $(this).siblings('.selection--cm__dropdown').slideToggle('hidden');
                });
            });
        });
    }

    ItemClick() {
        $('.selection--cm').each(function (i, e) {
            $(e).children('li').each(function (j, s) {
                $(s).click(function (event) {
                    if ($(event.target).hasClass('jsFirstLi') || $(event.target).hasClass('jsFirstSpan')) {
                        var child = $(this).children('.jsExpandCollapse').not('.hidden');
                        child.click();
                    }
                })
            })
        })

        $('.offside-navbar--menu').each(function (i, e) {
            $(e).children('li').each(function (j, s) {
                $(s).click(function (event) {
                    if ($(event.target).hasClass('jsFirstLi') || $(event.target).hasClass('jsFirstSpan')) {
                        var child = $(this).children('.jsExpandCollapse').not('.hidden');
                        child.click();
                    }
                })
            })
        })
    }
}